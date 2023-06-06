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
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        console.log(tasks, "tasks");
        console.log(count, "count");
    }, [tasks, count]);

    return (
        <>
            <h2>ToDos:</h2>
            <AddTask
                categories={categories}
                tasks={tasks}
                setTasks={setTasks}
                count={count}
                setCount={setCount}
            />
            {tasks &&
                tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        categories={categories}
                        // onDuplicate={onDuplicate}
                        tasks={tasks}
                        setTasks={setTasks}
                        count={count}
                        setCount={setCount}
                    />
                ))}
        </>
    );
};

export default Tasks;
