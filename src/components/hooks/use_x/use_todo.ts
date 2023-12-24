import { useState, useEffect } from "react";
import { isError } from '../../../helpers/is_error';

// useFetch:
// In the process of making useTodo more flexible, I encourage the use of type generics.
// In this case we'd move TodoResponse into the component that's calling our custom hook, and update useFetch to accept a generic type.

// For example:
// export const useFetch = <T>(url: string) => { const [data, setData] = useState<T>();

// and then use your specific type when you call it:
// const { data, isFetching } = useFetch<TodoResponse>(url);

// Now useFetch has the flexibility to make calls beyond the limitations of TodoResponse type.

const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T>();
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				setIsFetching(false);
				if (response.status === 200) {
					const json = await response.json();
					setData(json);
				}
			} catch (e: unknown) {
				setIsFetching(false);

				console.log(isError(e) ? e.message : 'Unknown error!');
			}
		};
		fetchData();
	}, [url]);

    return { data, isFetching}
};

export default useFetch;
