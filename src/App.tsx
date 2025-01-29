import { useAtom } from 'jotai';

import { counterAtom } from './atoms';
import Counter from './component/Counter';
import DoubleCounter from './component/DoubleCounter';

import './App.css';

function App() {
	const [count] = useAtom(counterAtom);
	return (
		<>
			<h1>{count}</h1>
			<Counter />
			<DoubleCounter />
		</>
	);
}

export default App;
