import {createContext, useState} from 'react';

// As the actual value you want to access
export const UserContext = createContext({
	currentUser: null,
	setCurentUser: () => null,
});

export const UserProvider = ({children}) => {
	const [currentUser, setCurentUser] = useState(null)
	const value = {currentUser, setCurentUser};

	return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}