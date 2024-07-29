import { TTask } from "@/types/task.type";
import Task from "./task";
/**
 * 
 This is a TypeScript/React function component named TaskList . It takes two props: tasks, which is an array of TTask objects, and onDeleteTask, which is a function that takes a number as an argument and returns void.

Inside the component, it maps over the tasks array and renders a Task component for each task, passing the task object and the onDeleteTask function as props. The key prop is set to the id of each task.

The component returns an unordered list (<ul>) containing the rendered Task components.
 */
export default function TaskList({
	tasks,
	onDeleteTask,
}: {
	tasks: TTask[];
	onDeleteTask: (id: string) => void;
}) {
	return (
		<ul className="flex flex-col gap-2">
			{tasks.map((task) => (
				<Task key={task.id} task={task} onDelete={onDeleteTask} />
			))}
		</ul>
	);
}
