import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type FC_RN<T extends ParamListBase, RouteName extends keyof T = Extract<keyof T, string>> = React.FC<{
	navigation?: StackNavigationProp<T>;
	route?: RouteProp<T, RouteName>;
}>;
