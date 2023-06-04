import { Form, Input, Button } from "../Form/Form";
import { useRef, useState } from "react";

interface CategoryProps {
    setCategories: (arg0: string) => unknown;
    categoryArray: string[];
}
const AddCategory = ({ setCategories, categoryArray }: CategoryProps) => {
    const userInput = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<boolean>(false);

    const handleAddCategory = (e: any) => {
        e.preventDefault();
        //post request
        const input = userInput.current && userInput.current.value;
        if (categoryArray.find((el) => el === input)) {
            setError(true);
        } else {
            setError(false);
            input && setCategories(input);
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
