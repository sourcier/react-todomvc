import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("renders todo header", () => {
    const { getByText } = render(<App />);
    const h1Element = getByText(/todos/);
    expect(h1Element).toBeInTheDocument();
  });
});
