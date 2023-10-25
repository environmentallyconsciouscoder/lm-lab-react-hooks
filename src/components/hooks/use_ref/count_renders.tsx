import { useState } from 'react';
import { useRef } from 'react';

export const CountRenders = () => {
	const [value, setValue] = useState('');
	// const count = 1;
	const ref = useRef(0);

	function handleClick(value: any){
		ref.current = ref.current + 1;
		setValue(value)
	}

	return (
		<>
			<h2>useRef</h2>

			<input
				value={value}
				type='text'
				onChange={(e) => handleClick(e.target.value)}
			/>

			<p>{value}</p>
			<p>I have rendered {ref.current} times</p>
		</>
	);
};

// import { useState } from 'react';
// import { useRef } from 'react';

// export const CountRenders = () => {
// 	const [value, setValue] = useState('');
// 	const count = 1;

// 	return (
// 		<>
// 			<h2>useRef</h2>

// 			<input
// 				value={value}
// 				type='text'
// 				onChange={(e) => setValue(e.target.value)}
// 			/>

// 			<p>{value}</p>
// 			<p>I have rendered {count} times</p>
// 		</>
// 	);
// };
