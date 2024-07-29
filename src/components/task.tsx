import { TTask } from "@/types/task.type";

export default function Task({
	task,
	onDelete,
}: {
	task: TTask;
	onDelete: (id: string) => void;
}) {
	return (
		<li className="flex justify-between items-center">
			<h3>{task.title}</h3>
			<p>{task.description}</p>
			<button onClick={() => onDelete(task.id)}>Delete</button>
		</li>
	);
}
