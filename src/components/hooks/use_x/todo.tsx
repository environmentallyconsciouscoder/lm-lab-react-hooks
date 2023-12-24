import useFetch from './use_todo';

interface TodoResponse {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export const Todo = () => {
	const {data, isFetching} = useFetch<TodoResponse>("https://jsonplaceholder.typicode.com/todos/1");

	return (
		<>
			<h2>Custom Hook</h2>
			{isFetching ? <p>Fetching...</p> : <p>{data?.title}</p>}
		</>
	);
};
