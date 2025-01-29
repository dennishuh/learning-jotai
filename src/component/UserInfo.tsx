import { useAtom } from 'jotai';
import { loadableUserAtom } from '../atoms';

const UserInfo = () => {
	const [user] = useAtom(loadableUserAtom);

	if (user.state === 'loading') {
		return <div>Loading...</div>;
	}

	if (user.state === 'hasError') {
		return <div>Error Occured</div>;
	}
	return (
		<div>
			<h1>User Info</h1>
			<p>Username: {user.data.name}</p>
			<p>Email: {user.data.email}</p>
		</div>
	);
};
export default UserInfo;
