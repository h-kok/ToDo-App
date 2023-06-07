import { useRef, useState } from "react";
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
    // onDuplicate: (data: TaskTemplate) => unknown;
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
    const [completed, setCompleted] = useState(task.completed);

    const selected = tasks.find((el) => el.id === task.id);
    if (!selected) {
        throw new Error("Task to be deleted was not found");
    }

    const handleInputChange = (e: any) => {
        task.task = e.target.value;
        console.log(task, "updated task");
    };

    const handleCategoryChange = (e: any) => {
        task.category = e.target.value;
        console.log(task, "updated category");
    };

    const handleDuplicateTask = () => {
        const { id, ...rest } = selected;
        const copy: TaskTemplate = { id: count, ...rest };
        setTasks([...tasks, copy]);
        setCount(count + 1);
    };

    const handleDeleteTask = () => {
        setTasks(tasks.filter((el) => el !== selected));
    };

    return (
        <Form onSubmit={(e) => e.preventDefault()}>
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
            <InputCheck
                defaultChecked={completed}
                type="checkbox"
                onInput={() => setCompleted(!completed)}
            />
            <Button onClick={handleDuplicateTask} type="button">
                Duplicate
            </Button>
            <DeleteBtn onClick={handleDeleteTask}>Delete</DeleteBtn>
        </Form>
    );
};

export default TaskCard;
