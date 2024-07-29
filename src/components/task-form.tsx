"use client";
import useAddTask from "@/hooks/useAddTask";
import { Controller } from "react-hook-form";

export default function TaskForm() {
	// const [title, setTitle] = useState("");
	// const [description, setDescription] = useState("");

	const { control, errors, onSubmit, isValid } = useAddTask();

	return (
		<form className="flex flex-col gap-2">
			<Controller
				control={control}
				name="title"
				render={({ field: { onChange, value, onBlur } }) => (
					<input
						className="input input-bordered input-primary text-black"
						placeholder="Task title"
						onChange={(e) => onChange(e.target.value)}
						value={value}
						onBlur={onBlur}
					/>
				)}
			/>
			{errors.title && <p className="text-red-500">{errors.title.message}</p>}
			<Controller
				control={control}
				name="description"
				render={({ field: { onChange, value, onBlur } }) => (
					<textarea
						className="textarea textarea-bordered textarea-primary text-black h-24"
						onChange={(e) => onChange(e.target.value)}
						value={value}
						onBlur={onBlur}
						placeholder="Task description"
					/>
				)}
			/>
			{errors.description && (
				<p className="text-red-500">{errors.description.message}</p>
			)}
			<button type="button" onClick={onSubmit}>
				Add Task
			</button>
		</form>
	);
}
