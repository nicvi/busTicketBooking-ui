import {render, screen} from "@testing-library/react";

import {Typography} from "./Typography";

describe("Typography", () => {
    it("should renders correctly", () => {
        render(<Typography text="Hello world" variant="h1" />);

        const text = screen.getByRole("heading");

        expect(text).toBeInTheDocument();
    });
});
