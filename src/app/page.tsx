"use client";
import { useState, useEffect } from "react";
import TaskForm from "@/components/task-form";
import TaskList from "@/components/task-list";
import { TTask } from "@/types/task.type";
import generateID from "@/utils/generateID";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function Home() {
	const [tasks, setTasks] = useLocalStorage("tasks", []);

	const deleteTask = (id: string) => {
		setTasks(tasks.filter((task: TTask) => task.id !== id));
	};

	return (
		<div className="container">
			<h1>Task Management Tool</h1>
			<TaskForm />
			<TaskList tasks={tasks} onDeleteTask={deleteTask} />
		</div>
	);
}
