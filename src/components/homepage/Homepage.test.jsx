import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";

describe("Homepage component", () => {
    it("renders welcome correctly", () => {
        render(<Homepage />);
        expect(screen.getByRole("heading").textContent).toMatch(/Welcome to the Shop!/i);
    });
});