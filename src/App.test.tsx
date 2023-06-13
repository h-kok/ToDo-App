import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("setup test", () => {
    it("checks true to be true", () => {
        expect(true).toBe(true);
    });

    it("renders landing page", () => {
        render(<App />);
        expect(screen.getByText(/todo app/i)).toBeInTheDocument();
        expect(screen.getByText(/add category/i)).toBeInTheDocument();
        expect(screen.getByText(/add task:/i)).toBeInTheDocument();
        expect(screen.getByText(/to do:/i)).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText(/add category/i)
        ).toBeInTheDocument();
    });
});
