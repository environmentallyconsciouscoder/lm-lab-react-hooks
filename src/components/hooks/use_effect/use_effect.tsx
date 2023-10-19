// make an api call using useEffect
import { useEffect, useState } from 'react';

export const APICall = () => {
    const [ url, setUrl ] = useState("https://jsonplaceholder.typicode.com/todos/1");
    // Your code here!

    // useEffect(() => {
    //     const connection = createConnection(serverUrl, roomId);
    //   connection.connect();
    //     return () => {
    //     connection.disconnect();
    //     };
    // }, [url]);

    return (
        <>
            <h2>useEffect</h2>
            <p>Your todo here!</p>
        </>
    )
}