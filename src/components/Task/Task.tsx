import { useState } from "react";
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
}

const TaskCard = ({ task, categories, tasks, setTasks }: TaskCardProps) => {
    const [completed, setCompleted] = useState(task.completed);
    const [editTask, setEditTask] = useState(task.task);
    const [editCategory, setEditCategory] = useState(task.category);

    const handleInputChange = (e: any) => {
        setEditTask(e.target.value);
        task.task = e.target.value;

        console.log(task, "updated task");
    };

    const handleCategoryChange = (e: any) => {
        setEditCategory(e.target.value);
        task.category = e.target.value;
        console.log(task, "updated category");
    };

    const handleDuplicateTask = () => {
        // e.preventDefault();
        const copy = tasks.find((el) => el.id === task.id);
        console.log(copy, "copy");
        const { id, ...rest } = copy;
        const newCopy: TaskTemplate = { id: tasks.length + 1, ...rest };
        console.log(newCopy);
        setTasks([...tasks, newCopy]);
    };

    return (
        <Form onSubmit={(e) => e.preventDefault()}>
            <Input
                type="text"
                required
                defaultValue={editTask}
                onChange={handleInputChange}
            />
            <Select
                id="category"
                defaultValue={editCategory}
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
            <DeleteBtn>Delete</DeleteBtn>
        </Form>
    );
};

export default TaskCard;
