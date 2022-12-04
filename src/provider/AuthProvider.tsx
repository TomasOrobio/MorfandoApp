import React, { createContext, useState, useEffect } from 'react';

export interface UserType {
	email: string;
	password: string;
	type: 'user' | 'shop';
	accessToken: string;
	refreshToken: string;
	user: string;
	lastName: string;
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

const useAuth = () =>{
	const context = React.useContext(AuthContext)
	if(context === undefined) {
		throw new Error('useAuth must be used inside AuthProvider')
	}
	return context;
}
export { useAuth, AuthProvider };
