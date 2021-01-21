import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home"
import { Card, CardBody, CardTitle } from "reactstrap";


test("renders wihtout crashing", function () {
  render(<Home />);
});

test("match snapshot", function () {
  const { asFragment } = render(
    <div className="font-weight-bold">
      Welcome to Silicon Valley's premier dive cafe!
    </div>
  );
  expect(asFragment()).toMatchSnapshot();
});
