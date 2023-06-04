import styled from "styled-components";

export const Form = styled.form`
    /* margin: 10px; */
    padding: 20px;
    display: flex;
`;

export const Input = styled.input`
    width: 40vw;
    height: 2em;
    border-radius: 5px;
    margin: 2px;
`;

export const InputCheck = styled.input`
    border-radius: 50%;
    width: 3vw;
`;

export const Select = styled.select`
    width: 20vw;
    margin: 2px;
`;

export const Button = styled.button`
    width: 10vw;
    background-color: white;
    border-radius: 5px;
    font-weight: bold;
    margin: 2px;
    &:hover {
        background-color: pink;
    }
`;

export const DeleteBtn = styled(Button)`
    background-color: palegreen;
`;
