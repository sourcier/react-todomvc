import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

describe("<App />", () => {
  test("renders without exploding", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
