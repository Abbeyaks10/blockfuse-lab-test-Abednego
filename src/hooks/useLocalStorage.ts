"use client";
import { TTask } from "@/types/task.type";
import { useState, useEffect } from "react";

function useLocalStorage(key: string, initialValue: Array<TTask>) {
	const [storedValue, setStoredValue] = useState(() => {
		if (typeof window === "undefined") {
			return initialValue;
		}
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			try {
				window.localStorage.setItem(key, JSON.stringify(storedValue));
			} catch (error) {
				console.log(error);
			}
		}
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
}

export default useLocalStorage;
