import React, { createContext, useState, useEffect } from 'react';

interface UserType {
	email: string;
	password: string;
	type: 'user' | 'shop';
}

type UserContextType = UserType | null | boolean;

interface IContextProps {
	user: UserContextType;
	setUser: React.Dispatch<UserContextType>;
}

const AuthContext = React.createContext({} as IContextProps);

const AuthProvider = (props: any) => {
	// user null = loading
	const [user, setUser] = useState<UserContextType>(false);
	const value = { user, setUser };
	return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
