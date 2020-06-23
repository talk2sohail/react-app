import React, { createContext, useState } from 'react';

export const UserContext = createContext();
const UserContextProvider = props => {
	let init = {
		userName: 'tahir7044',
		gender: '',
		email: 'tahir@7044gmail.com',
		phoneNumber: '7044523604',
		password: 'tahir7044',
	};
	const [user, setUser] = useState(init);
	const SubmitHandler = tempUser => {
		init = tempUser;
		setUser(tempUser);
	};

	return (
		<UserContext.Provider value={{ user, SubmitHandler }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
