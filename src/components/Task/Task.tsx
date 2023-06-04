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
}

const TaskCard = ({ task, categories }: TaskCardProps) => {
    const [completed, setCompleted] = useState(task.completed);
    const [editTask, setEditTask] = useState(task.task);
    const [editCategory, setEditCategory] = useState(task.category);

    const handleInputChange = (e: any) => {
        setEditTask(e.target.value);
    };

    const handleCategoryChange = (e: any) => {
        setEditCategory(e.target.value);
        console.log(e.target.value);
    };

    return (
        <Form>
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
            <Button>Duplicate</Button>
            <DeleteBtn>Delete</DeleteBtn>
        </Form>
    );
};

export default TaskCard;
