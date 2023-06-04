import "./App.css";
import Tasks from "./containers/Tasks/Tasks";
import styled from "styled-components";
import AddCategory from "./components/AddCategory/AddCategory";
import { useEffect, useState } from "react";

const Global = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    border: 2px solid black;
    padding: 2em;
`;
const Title = styled.h1`
    text-align: center;
    text-decoration: underline;
`;

function App() {
    const [tasks, setTasks] = useState<[]>([]);
    const [categories, setCategories] = useState<string | null>(null);
    const [categoryArray, setCategoryArray] = useState<string[]>([]);

    useEffect(() => {
        //get list data
        //setList to data
        //get request all categories data
        //setCategories to data
        categoryArray && categories && categoryArray.push(categories);
        console.log(categoryArray);
    }, [categories]);

    return (
        <Global>
            <Title>ToDo App</Title>
            <AddCategory
                // key={categories.id}
                // categories={categories}
                setCategories={setCategories}
                categoryArray={categoryArray}
            />
            {/* <Tasks key={tasks.id} tasks={tasks} /> */}
        </Global>
    );
}

export default App;
