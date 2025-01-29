import { useAtom } from 'jotai';

import { counterAtom } from '../App';

const Counter = () => {
	const [, setCount] = useAtom(counterAtom);
	return (
		<>
			<button onClick={() => setCount((prev) => prev + 1)}>+</button>
			<button onClick={() => setCount((prev) => prev - 1)}>-</button>
		</>
	);
};
export default Counter;
