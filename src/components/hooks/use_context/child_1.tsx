import { useContext } from "react";

type childType = {
	themeValue: boolean
}

export const Child1: React.FC<childType> = ({themeValue}) => {

	const theme = {
		backgroundColor: themeValue ? '#333' : '#CCC',
		color: themeValue ? 'white' : '#333',
		padding: '2rem',
		margin: '2rem',
	};

	return <div style={theme}>Child 1</div>;
};
