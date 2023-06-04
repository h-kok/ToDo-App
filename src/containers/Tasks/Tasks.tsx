import { useEffect, useState } from "react";
import AddTask from "../../components/AddTask/AddTask";
import TaskCard from "../../components/Task/Task";

export interface TaskTemplate {
    id: number;
    task: string;
    category: string;
    completed: boolean;
}

interface TasksProps {
    categories: string[] | null;
}

const Tasks = ({ categories }: TasksProps) => {
    const [tasks, setTasks] = useState<TaskTemplate[]>([]);
    // console.log(categories, "tasks");

    useEffect(() => {
        console.log(tasks, "tasks");
    }, [tasks]);
    return (
        <>
            <h2>ToDos:</h2>
            <AddTask categories={categories} setTasks={setTasks} />
            {tasks &&
                tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        categories={categories}
                    />
                ))}
        </>
    );
};

export default Tasks;
