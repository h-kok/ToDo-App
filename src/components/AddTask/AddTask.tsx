import { CategoryTemplate } from "../../App";
import { TaskTemplate } from "../../containers/Tasks/Tasks";
import { Button, Form, Input, Select } from "../Form/Form";
import { useRef } from "react";

interface AddTaskProps {
    categories: CategoryTemplate[] | null;
    tasks: TaskTemplate[] | null;
    setTasks: (data: TaskTemplate[]) => unknown;
    count: number;
    setCount: (data: number) => unknown;
}
const AddTask = ({
    categories,
    tasks,
    setTasks,
    count,
    setCount,
}: AddTaskProps) => {
    const input = useRef<HTMLInputElement>(null);
    const category = useRef<HTMLSelectElement>(null);

    const handleAddTask = (e: any) => {
        e.preventDefault();
        if (input.current && category.current) {
            const taskValues: TaskTemplate = {
                id: count,
                task: input.current.value,
                category: category.current.value,
                completed: false,
            };
            console.log(taskValues, "taskvalues");
            const newArr: TaskTemplate[] = tasks?.concat(taskValues);
            console.log(newArr, "newarr");
            setTasks(newArr);
        }
        setCount(count + 1);
        e.target.reset();
    };

    return (
        <Form onSubmit={handleAddTask}>
            <Input required ref={input} />
            <Select required ref={category}>
                {categories &&
                    categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.category}
                        </option>
                    ))}
            </Select>
            <Button>Add</Button>
        </Form>
    );
};

export default AddTask;
