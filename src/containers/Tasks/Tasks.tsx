import { useEffect, useState } from "react";
import AddTask from "../../components/AddTask/AddTask";
import TaskCard from "../../components/Task/Task";
import { CategoryTemplate } from "../../App";

export interface TaskTemplate {
    id: number;
    task: string;
    category: string;
    completed: boolean;
}

interface TasksProps {
    categories: CategoryTemplate[] | null;
}

const Tasks = ({ categories }: TasksProps) => {
    const [tasks, setTasks] = useState<TaskTemplate[]>([]);

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
                        // onDuplicate={onDuplicate}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                ))}
        </>
    );
};

export default Tasks;
