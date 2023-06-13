import { CategoryTemplate } from "../../App";
import { Form, Input, Button } from "../Form/Form";
import { useRef, useState } from "react";

interface CategoryProps {
    categories: CategoryTemplate[];
    setCategories: (data: CategoryTemplate[]) => unknown;
}
const AddCategory = ({ categories, setCategories }: CategoryProps) => {
    const userInput = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<boolean>(false);
    const [count, setCount] = useState<number>(1);

    const handleAddCategory = (e: any) => {
        e.preventDefault();
        //post request

        const input = userInput.current && {
            id: count,
            category: userInput.current.value,
        };
        if (!input) {
            throw new Error("You must enter a valid category");
        }

        if (categories.find((el) => el.category === input?.category)) {
            setError(true);
        } else {
            setError(false);
            categories.push(input);
            setCategories([...categories]);
            setCount(count + 1);
        }
        e.target.reset();
    };

    return (
        <div>
            <h2>Add category</h2>
            <Form onSubmit={handleAddCategory}>
                <Input
                    type="text"
                    required
                    id="category"
                    ref={userInput}
                    placeholder="Add Category"
                />
                <Button type="submit">Add</Button>
            </Form>
            {error && (
                <p>This category already exists. Please enter a new one.</p>
            )}
        </div>
    );
};

export default AddCategory;
