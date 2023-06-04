import { Form, Input, Button } from "../Form/Form";
import { useRef, useState } from "react";

interface CategoryProps {
    setCategories: (data: string[]) => unknown;
}
const AddCategory = ({ setCategories }: CategoryProps) => {
    const userInput = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<boolean>(false);
    const [cat, setCat] = useState<string[]>([]);

    const handleAddCategory = (e: any) => {
        e.preventDefault();
        //post request

        const input: string | null =
            userInput.current && userInput.current.value;

        if (cat.find((el) => el === input)) {
            setError(true);
        } else {
            setError(false);
            input && cat.push(input);
            cat && setCategories([...cat]);
        }
        e.target.reset();
    };

    return (
        <div>
            <h2>Add category</h2>
            <Form onSubmit={handleAddCategory}>
                <Input type="text" required id="category" ref={userInput} />
                <Button type="submit">Add</Button>
            </Form>
            {error && (
                <p>This category already exists. Please enter a new one.</p>
            )}
        </div>
    );
};

export default AddCategory;
