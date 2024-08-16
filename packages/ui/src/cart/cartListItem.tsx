import { removeFromCartAtom } from '../../../app/atoms/cart'

export const CartListItem = (item: Product): React.ReactElement => {
  return (
    <YStack flexDirection='row' paddingLeft='$2'>
      <SolitoImage
        src='/t4-logo.png'
        width={56}
        height={56}
        alt='T4 Logo'
        style={{
          marginTop: 8,
        }}
      />
      <YStack>
        <Paragraph paddingTop='$2' paddingLeft='$3' paddingBottom='$1' fontSize={16}>
          {`${item.name} `}
        </Paragraph>
        <Paragraph paddingLeft='$3' fontSize={16} opacity={0.6}>
          {item.category} - {item.stock_quantity}
          {formatPrice(item.price)}
        </Paragraph>

        <Paragraph paddingLeft='$3' fontSize={16} opacity={0.6}>
          {`Quantity: ${item.quantity}`}
        </Paragraph>

        <Button onPress={() => removeFromCart({ id: item.id })} space='$2'>
          Delete
        </Button>
      </YStack>
    </YStack>
  )
}
