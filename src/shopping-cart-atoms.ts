import { atom } from "jotai";

export const cartAtom = atom([]);
export const totalAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.reduce((acc, item) => acc + item.price, 0);
});