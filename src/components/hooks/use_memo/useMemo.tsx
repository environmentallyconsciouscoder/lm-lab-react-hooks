import { useState, useMemo } from 'react';

export const MemoExample = () => {
  console.log("Rendering component...");

  const [numberObj, setNumberObj] = useState({ input: 0 });

  const doubleNumber = useMemo(
    () => slowFunction(numberObj.input),
	//make sure you reference correcly as numberObj as depedency wont't work for memo because it is creating a new object in setState
    [numberObj.input]
  );

  const handleButtonClick = () => {
	// this code here commented out will call the slow function each time because the dependency numberObj.input has changed
    // setNumberObj((prevNumberObj) => ({ input: prevNumberObj.input + 1 }));
	// This line creates a new object, causing a re-render
	setNumberObj((prevNumberObj) => ({ input: 0 }));
  };

  return (
    <>
      <h2>useMemo</h2>

      <button onClick={handleButtonClick}>Increment Input</button>

      <p className='use-memo__text'>{doubleNumber}</p>
    </>
  );
};

function slowFunction(num: number) {
  console.log('calling slow function... 🐌');
  for (let i = 0; i <= 1000000000; i++) {
    // ⏰ This loop makes the function slow
  }
  const result = num * 2;
  console.log(`result: ${result}`);
  return result;
}
