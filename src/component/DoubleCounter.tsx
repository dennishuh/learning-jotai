import { useAtom } from 'jotai';

import { doubleCounterAtom } from '../atoms';

const Counter = () => {
	const [doubleCount] = useAtom(doubleCounterAtom);
	return (
		<>
			<h2>{doubleCount}</h2>
		</>
	);
};
export default Counter;
