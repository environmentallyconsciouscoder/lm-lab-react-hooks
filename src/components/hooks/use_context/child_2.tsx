import { useContext } from "react";
import { ThemeContext } from "./parent";


export const Child2: React.FC = () => {
	const isDark = useContext(ThemeContext);

	const theme = {
		backgroundColor: isDark.type ? '#333' : '#CCC',
		color: isDark.type ? 'white' : '#333',
		padding: '2rem',
		margin: '2rem',
	};

	return <div style={theme}>Child 2</div>;
};
