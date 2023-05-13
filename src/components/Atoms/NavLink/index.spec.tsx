import { render } from "@testing-library/react";
import { NavLink } from ".";
import { BrowserRouter } from "react-router-dom";

describe('NavLink component', () => {
  it('should render the link with correct label', async () => {
    const { getByText } = render(<BrowserRouter><NavLink label="testLabel123" link="http://teste.com"/></BrowserRouter>)
    expect(getByText("testLabel123")).toBeTruthy();
  });
});

