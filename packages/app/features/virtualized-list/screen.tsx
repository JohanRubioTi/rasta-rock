import { Paragraph, Spinner, VirtualList, XStack, YStack  } from '@t4/ui'
import { CarListError } from '@t4/ui/src/cars/CarListError'
import { CarListItem } from '@t4/ui/src/cars/CarListItem'
import { ProductListItem } from '@t4/ui/src/products/productListItem'
import { trpc } from 'app/utils/trpc'
import { empty, error, loading, success } from 'app/utils/trpc/patterns'
import React from 'react'
import { match } from 'ts-pattern'

export const VirtualizedListScreen = (): React.ReactNode => {
  const productsList = trpc.product.all.useQuery()
  const productsListLayout = match(productsList)
    .with(error, () => <CarListError message={productsList.failureReason?.message} />)
    .with(loading, () => (
      <YStack fullscreen f={1} jc='center' ai='center'>
        <Paragraph pb='$3'>Loading...</Paragraph>
        <Spinner />
      </YStack>
    ))
    .with(empty, () => <Paragraph>No products found.</Paragraph>)
    .with(success, () => (
      <VirtualList data={productsList.data as any[]} renderItem={ProductListItem} itemHeight={90} />
    ))
    .otherwise(() => <CarListError message={productsList.failureReason?.message} />)

  return (
    <YStack fullscreen flex={1}>
      {productsListLayout}
    </YStack>
  )
}

