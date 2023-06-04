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

interface TaskCardProps {
    task: TaskTemplate;
    categories: string[] | null;
}

const TaskCard = ({ task, categories }: TaskCardProps) => {
    // const defaultValues = {
    //     task: task.task,
    //     category: task.category,
    //     completed: task.completed,
    // };
    const [completed, setCompleted] = useState(task.completed);

    return (
        <Form>
            <Input type="text" required defaultValue={task.task} />
            <Select id="category" defaultValue={task.category}>
                {categories &&
                    categories.map((cat) => <option value={cat}>{cat}</option>)}
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
