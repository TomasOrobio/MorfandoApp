import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../types';

type RegisterScreenProps = StackScreenProps<RootStackParams, 'Login'>;
const RegisterScreen: React.FC<RegisterScreenProps> = ({ route, navigation }) => {
	return <></>;
};

export default RegisterScreen;
