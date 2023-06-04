import { TaskTemplate } from "../../containers/Tasks/Tasks";
import { Button, Form, Input, Select } from "../Form/Form";
import { useRef, useState } from "react";

interface AddTaskProps {
    categories: string[] | null;
    setTasks: (data: TaskTemplate[]) => unknown;
}
const AddTask = ({ categories, setTasks }: AddTaskProps) => {
    const [taskArray, setTaskArray] = useState<TaskTemplate[]>([]);
    const [count, setCount] = useState<number>(1);

    const input = useRef<HTMLInputElement>(null);
    const category = useRef<HTMLSelectElement>(null);

    const handleAddTask = (e: any) => {
        e.preventDefault();

        const taskValues = input.current &&
            category.current && {
                id: count,
                task: input.current.value,
                category: category.current.value,
                completed: false,
            };

        taskValues && taskArray.push(taskValues);
        taskArray && setTasks([...taskArray]);
        setTaskArray(taskArray);
        setCount(count + 1);
        e.target.reset();
    };

    return (
        <Form onSubmit={handleAddTask}>
            <Input required ref={input} />
            <Select required ref={category}>
                {categories &&
                    categories.map((cat: string) => (
                        <option value={cat}>{cat}</option>
                    ))}
            </Select>
            <Button>Add</Button>
        </Form>
    );
};

export default AddTask;
