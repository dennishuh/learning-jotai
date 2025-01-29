import { atom, useAtom } from 'jotai';

import Counter from './component/Counter';
import './App.css';

export const counterAtom = atom(0);

function App() {
	const [count] = useAtom(counterAtom);
	return (
		<>
			<h1>{count}</h1>
			<Counter />
		</>
	);
}

export default App;
