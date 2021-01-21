import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";



test ("renders wihtout crashing", function () {
    render(<App />)
})

test ("match snapshot", function() {
    const { asFragment } = render(
      <BrowserRouter />
    );
    expect(asFragment()).toMatchSnapshot();
})