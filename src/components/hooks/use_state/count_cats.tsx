import { useState } from "react";

export function CountCats() {

  const [ cats, setCats ] = useState<Array<string>>(['🐈']);

  const incrementCats = () => {
    setCats([...cats, '🐈']);
  }

  return (
    <>
    <h2>useState</h2>

    <p>{cats}</p>
    <p>Number of cats: {cats.length}</p>
    <button onClick={incrementCats}>
      add cat
    </button>
    </>
  );
}

