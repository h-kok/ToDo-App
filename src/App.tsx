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
    const [categories, setCategories] = useState<string[] | null>(null);

    useEffect(() => {
        //get list data
        //setList to data
        //get request all categories data
        //setCategories to data

        console.log(categories, "app");
    }, [categories]);

    return (
        <Global>
            <Title>ToDo App</Title>
            <AddCategory setCategories={setCategories} />
            <Tasks categories={categories} />
        </Global>
    );
}

export default App;
