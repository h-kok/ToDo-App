import { useForm } from "react-hook-form";
import { Button, Form, Input, Select } from "../Form/Form";
import { categories } from "../AddCategory/AddCategory";

const AddTask = () => {
    const defaultValues = { task: "", category: 1 };

    const {
        register,
        handleSubmit,
        // formState: { errors },
        reset,
    } = useForm({
        defaultValues: { ...defaultValues },
    });

    const handleAddTask = (data: any) => {
        console.log("task added");
        reset({ ...defaultValues });
        console.log(data);
    };
    return (
        <Form onSubmit={handleSubmit(handleAddTask)}>
            <Input required {...register("task", { minLength: 1 })} />
            <Select {...register("category")} required>
                {categories &&
                    categories.map((cat) => (
                        <option key={cat.id} value={cat.category}>
                            {cat.category}
                        </option>
                    ))}
            </Select>
            <Button>Add</Button>
        </Form>
    );
};

export default AddTask;
