// make an api call using useEffect
import { useEffect, useState } from 'react';

interface APIReponse {
    completed: boolean,
    id: number,
    title: string,
    userId: 1
}

export const APICall = () => {
    const [ url, setUrl ] = useState("https://jsonplaceholder.typicode.com/todos/1");
    const [ results, setResults ] = useState<APIReponse>();
    // Your code here!

    useEffect(() => {
        const getResponse = async (): Promise<void> => {
            const apiResponse = await fetch(url);
            const responseData = await apiResponse.json();
            setResults(responseData);
        }
        getResponse();
    }, []);

    useEffect(() => {
        console.log("new results", results);
    }, [results]);

    return (
        <>
            <h2>useEffect</h2>
            <p>Your todo here!</p>
        </>
    )
}