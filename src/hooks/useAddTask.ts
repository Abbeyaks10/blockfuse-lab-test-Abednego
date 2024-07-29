import { title } from "process";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";
import { TTask } from "@/types/task.type";
import generateID from "@/utils/generateID";

const schema = z.object({
	title: z.string().min(5, "Adhere to proper title format"),
	description: z
		.string()
		.min(15, "Describe the task in at least 15 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function useAddTask() {
	const {
		control,
		reset,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			title: "",
			description: "",
		},
		mode: "onChange",
		reValidateMode: "onChange",
	});
	const [tasks, setTasks] = useLocalStorage("tasks", []);

	const onSubmit = useCallback(
		async (data: FormValues) => {
			const newTasks = [...tasks, { ...data, id: generateID() }];
			console.log("data", newTasks);
			setTasks(newTasks);
			document.location.reload();
			reset();
		},
		[setTasks, tasks, reset]
	);
	return { control, errors, isValid, onSubmit: handleSubmit(onSubmit) };
}
