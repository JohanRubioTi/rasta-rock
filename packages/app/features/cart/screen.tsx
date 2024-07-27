import { atom, useAtom } from 'jotai'
import { useSetAtom } from "jotai";
import { CartListItem } from '@t4/ui/src/cart/cartListItem'

import { useSheetOpen } from '../../../app/atoms/sheet'
import { addToCartAtom, removeFromCartAtom } from '../../../app/atoms/cart'


const ProductSheet = (item: Product): React.ReactNode => {
  const [open, setOpen] = useSheetOpen()
  const [position, setPosition] = useState(0)

  const cart = useAtomValue(cartAtom);
  const totalCartValue = useAtomValue(cartTotalAtom);


  return (
    <>
      <Button onPress={() => setOpen((x) => !x)} space='$2'>
        Cart Sheet
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

          <VirtualList data={cart as any[]} renderItem={CartListItem} itemHeight={80} />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
