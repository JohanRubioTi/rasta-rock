import type { Product } from '@t4/api/src/db/schema'
import { atom, useAtom } from 'jotai'

export const cartAtom = atom<Product[]>([])

export const addToCartAtom = atom(null, (get, set, update: Product) => {
  const cart = get(cartAtom)
  const currentProduct = cart.find((product) => product.id === update.id)

  if (!currentProduct) {
    set(cartAtom, [...cart, update])
    return
  }

  set(
    cartAtom,
    cart.map((product) => {
      if (product.id === currentProduct.id) {
        return { ...product, quantity: product.quantity + update.quantity }
      }
      return product
    })
  )
})

export const removeFromCartAtom = atom(null, (get, set, update: Pick<Product, 'id'>) => {
  const cart = get(cartAtom)
  const updatedCart = cart.filter((item) => item.id !== update.id)
  set(cartAtom, updatedCart)
})

export const cartTotalAtom = atom((get) =>
  get(cartAtom)
    .reduce((total, prod) => total + prod.price * prod.quantity, 0)
    .toFixed(2)
)

export const cartTotalQuantity = atom((get) =>
  get(cartAtom)
    .reduce((total, prod) => total + prod.quantity, 0)
    .toFixed(2)
)
