
import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SvgProps {
	fontSize: number;
	color: string;
}
class Edit extends React.Component<SvgProps> {
	render() {
		const { fontSize, color } = this.props;
		return (
		<Svg width={fontSize} height={fontSize} color={color} viewBox="0 0 26 26">
			<Path
				fill="none"
				stroke="#090A0A"
				d="M11.5 3.47487H3.33333C2.71449 3.47487 2.121 3.72071 1.68342 4.15829C1.24583 4.59588 1 5.18937 1 5.80821V22.1415C1 22.7604 1.24583 23.3539 1.68342 23.7915C2.121 24.229 2.71449 24.4749 3.33333 24.4749H19.6667C20.2855 24.4749 20.879 24.229 21.3166 23.7915C21.7542 23.3539 22 22.7604 22 22.1415V13.9749M20.25 1.72487C20.7141 1.26074 21.3436 1 22 1C22.6564 1 23.2859 1.26074 23.75 1.72487C24.2141 2.189 24.4749 2.8185 24.4749 3.47487C24.4749 4.13125 24.2141 4.76074 23.75 5.22487L12.6667 16.3082L8 17.4749L9.16667 12.8082L20.25 1.72487Z"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
	}
}

export default Edit;