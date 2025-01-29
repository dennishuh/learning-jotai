import { useAtom } from 'jotai';
import { cartAtom, totalAtom } from '../shopping-cart-atoms';

const ShoppingCart = () => {
	const [cart, setCart] = useAtom(cartAtom);
	const [total] = useAtom(totalAtom);

	const addItem = (item) => {
		setCart((prev) => [...prev, item]);
	};

	const removeItem = (idx) => {
		setCart((prev) => prev.filter((_, i) => i !== idx));
	};
	return (
		<div>
			<h2>Shopping Cart</h2>
			<ul>
				{cart?.map((item, idx) => (
					<li key={item.id}>
						{item.itemName} - ${item.price}
						<button onClick={() => removeItem(idx)}>Remove Item</button>
					</li>
				))}
			</ul>
			<h2>Total: {total}</h2>
			<button onClick={() => addItem({ itemName: 'Apple', price: 0.99 })}>
				Add Apple
			</button>
			<button onClick={() => addItem({ itemName: 'Banana', price: 2.99 })}>
				Add Banana
			</button>
		</div>
	);
};
export default ShoppingCart;
