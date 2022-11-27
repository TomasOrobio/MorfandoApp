import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SvgProps {
	fontSize: number;
	color: string;
}
class Back extends React.Component<SvgProps> {
	render() {
		const { fontSize, color } = this.props;
		return (
			<Svg width={fontSize} height={fontSize} color={color} viewBox="0 0 17 17">
				<Path
					fill="currentColor"
					stroke="currentColor"
					d="M16 8.50013H1M1 8.50013L8.5 16M1 8.50013L8.5 1"
					strokeWidth={1.5}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</Svg>
		);
	}
}

export default Back;
