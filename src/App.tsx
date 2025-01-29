import { useAtom } from 'jotai';

import { counterAtom } from './atoms';
import Counter from './component/Counter';
import DoubleCounter from './component/DoubleCounter';
import UserInfo from './component/UserInfo';
import ShoppingCart from './component/ShoppingCart';

import './App.css';

function App() {
	const [count] = useAtom(counterAtom);
	return (
		<>
			<UserInfo />
			<ShoppingCart />
			<h1>{count}</h1>
			<Counter />
			<DoubleCounter />
		</>
	);
}

export default App;
