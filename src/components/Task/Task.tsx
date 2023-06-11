import {
    Button,
    DeleteBtn,
    Form,
    Input,
    InputCheck,
    Select,
} from "../Form/Form";
import { TaskTemplate } from "../../containers/Tasks/Tasks";
import { CategoryTemplate } from "../../App";

interface TaskCardProps {
    task: TaskTemplate;
    categories: CategoryTemplate[] | null;
    tasks: TaskTemplate[];
    setTasks: (data: TaskTemplate[]) => unknown;
    count: number;
    setCount: (data: number) => unknown;
}

const TaskCard = ({
    task,
    categories,
    tasks,
    setTasks,
    count,
    setCount,
}: TaskCardProps) => {
    const handleInputChange = (e: any) => {
        task.task = e.target.value;
        console.log(task, "updated task");
    };

    const handleCategoryChange = (e: any) => {
        task.category = e.target.value;
        console.log(task, "updated category");
    };

    const handleDuplicateTask = () => {
        const { id, completed, ...rest } = task;
        const copy: TaskTemplate = { id: count, ...rest, completed: false };
        setTasks([...tasks, copy]);
        setCount(count + 1);
    };

    const handleDeleteTask = () => {
        setTasks(tasks.filter((el) => el !== task));
    };

    const handleCheckTask = () => {
        task.completed = !task.completed;
    };

    return (
        <Form onSubmit={(e) => e.preventDefault()}>
            <InputCheck
                defaultChecked={task.completed}
                type="checkbox"
                onInput={handleCheckTask}
            />
            <Input
                type="text"
                required
                defaultValue={task.task}
                onChange={handleInputChange}
            />
            <Select
                id="category"
                defaultValue={task.category}
                onChange={handleCategoryChange}
            >
                {categories &&
                    categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.category}
                        </option>
                    ))}
            </Select>
            <Button onClick={handleDuplicateTask} type="button">
                Duplicate
            </Button>
            <DeleteBtn onClick={handleDeleteTask} type="button">
                Delete
            </DeleteBtn>
        </Form>
    );
};

export default TaskCard;
