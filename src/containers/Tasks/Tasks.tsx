import AddTask from "../../components/AddTask/AddTask";
import TaskCard from "../../components/Task/Task";
import { TaskTemplate } from "../../services/services";

const taskList = [
    {
        id: 1,
        task: "make bed",
        category: "life admin",
        completed: false,
    },
    {
        id: 2,
        task: "drink water",
        category: "life admin",
        completed: false,
    },
    {
        id: 3,
        task: "climb mount everest",
        category: "leisure",
        completed: false,
    },
    {
        id: 4,
        task: "call grandma",
        category: "social",
        completed: false,
    },
    {
        id: 5,
        task: "clean car",
        category: "cleaning",
        completed: false,
    },
];

interface TasksProps {
    tasks: TaskTemplate[] | null;
}

const Tasks = ({ tasks }: TasksProps) => {
    return (
        <>
            <h2>ToDos:</h2>
            <AddTask />
            {taskList &&
                taskList.map((task) => <TaskCard key={task.id} task={task} />)}
        </>
    );
};

export default Tasks;
