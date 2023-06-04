import { useEffect, useState } from "react";
import { categories } from "../AddCategory/AddCategory";
import {
    Button,
    DeleteBtn,
    Form,
    Input,
    InputCheck,
    Select,
} from "../Form/Form";
import { useForm } from "react-hook-form";

interface TaskCardProps {
    task: any;
}

const TaskCard = ({ task }: TaskCardProps) => {
    const defaultValues = {
        task: task.task,
        category: task.category,
        completed: task.completed,
    };
    const [completed, setCompleted] = useState(task.completed);

    const {
        register,
        handleSubmit,
        // formState: { errors },
        reset,
    } = useForm({ defaultValues: { ...defaultValues } });

    useEffect(() => {
        reset({ ...defaultValues });
    }, []);

    const handleEditTask = (data: any) => {
        console.log("task edited");
        console.log(data);
        //patch request
    };

    const handleDeleteTask = (data: any) => {
        console.log("task deleted");
        //delete request
    };

    const handleDuplicateTask = (data: any) => {
        console.log("task duplicated");
        // post request
    };

    const handleCheck = () => {
        setCompleted(!completed);
    };

    return (
        <Form onSubmit={handleSubmit(handleEditTask)}>
            <Input
                type="text"
                required
                {...register("task", { minLength: 1 })}
            />
            <Select id="category" {...register("category")}>
                {categories &&
                    categories.map((cat) => (
                        <option key={cat.id} value={cat.category}>
                            {cat.category}
                        </option>
                    ))}
            </Select>
            <InputCheck
                type="checkbox"
                checked={completed}
                onClick={handleCheck}
                {...register("completed")}
            />
            <Button onClick={handleDuplicateTask}>Duplicate</Button>
            <DeleteBtn onClick={handleDeleteTask}>Delete</DeleteBtn>
        </Form>
    );
};

export default TaskCard;
