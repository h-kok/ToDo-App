import { render, screen } from "@testing-library/react";
import AddCategory from "./AddCategory";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

describe("AddCateogry component test", () => {
    it("should render the AddCateogry form", () => {
        render(<AddCategory categories={[]} setCategories={() => []} />);
    });

    it("should render the AddCategory form with props", () => {
        render(
            <AddCategory
                categories={[{ id: 1, category: "coding" }]}
                setCategories={() => [{ id: 1, category: "coding" }]}
            />
        );
        // screen.debug();
    });

    it("should clear input after submit", async () => {
        render(<AddCategory categories={[]} setCategories={() => []} />);
        const btn = screen.getByRole("button");
        const user = userEvent.setup();
        const input: HTMLInputElement =
            screen.getByPlaceholderText("Add Category");
        await user.type(input, "coding");
        expect(input.value).toBe("coding");
        await user.click(btn);
        expect(input.value).toBe("");
    });

    // it("should alert an error if the user attempts to add a duplicate category", async () => {
    //     render(<AddCategory categories={[]} setCategories={() => []} />);
    //     const btn = screen.getByRole("button");
    //     const user = userEvent.setup();
    //     const input: HTMLInputElement =
    //         screen.getByPlaceholderText("Add Category");
    //     const msg = screen.queryByText(
    //         /this category already exists. Pleaes enter a new one/i
    //     );
    //     await user.type(input, "coding");
    //     await user.click(btn);
    //     screen.debug();
    //     expect(msg).not.toBeInTheDocument();
    //     await user.type(input, "coding");
    //     await user.click(btn);
    //     screen.debug();
    //     expect(msg).toBeInTheDocument();
    // });
});

//clear input after submit
//select options should appear?
//error if add dupllicate cat
//error if empty form
