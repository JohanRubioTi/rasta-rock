import React, { useState } from 'react'

import { Button, Sheet } from '@t4/ui'
import { ChevronDown } from '@tamagui/lucide-icons'
import type { Product } from '@t4/api/src/db/schema'
import { formatNumber, formatPrice } from '@t4/ui/src/libs/number'
import { SolitoImage } from 'solito/image'
import { Paragraph, YStack } from 'tamagui'

import { useSetAtom } from 'jotai'
import { useSheetOpen } from '../../../app/atoms/sheet'
import { addToCartAtom } from '../../../app/atoms/cart'

export const ProductListItem = (item: Product): React.ReactElement => {
  return (
    <YStack paddingLeft='$2'>
      <SolitoImage
        src='/t4-logo.png'
        width={56}
        height={56}
        alt='T4 Logo'
        style={{
          marginTop: 8,
        }}
      />
      <YStack f={1}>
        <Paragraph paddingTop='$2' paddingLeft='$3' paddingBottom='$1' fontSize={16}>
          {`${item.name} `}
        </Paragraph>
        <Paragraph paddingLeft='$3' fontSize={16} opacity={0.6}>
          {item.category} - {item.stock_quantity} - {formatPrice(item.price)}
        </Paragraph>
      </YStack>
      <ProductSheet Product={item} />
    </YStack>
  )
}

const ProductSheet = (item: Product): React.ReactNode => {
  const [open, setOpen] = useSheetOpen()
  const [position, setPosition] = useState(0)

  const addToCart = useSetAtom(addToCartAtom)

  return (
    <>
      <Button onPress={() => setOpen((x) => !x)} space='$2'>
        See more
      </Button>

      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame alignItems='center' justifyContent='center'>
          <Sheet.Handle />
          <Button
            size='$6'
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
            }}
          />

          <Button onPress={() => addToCart({ ...item, quantity: 1 })} space='$2'>
            Add to Cart
          </Button>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
