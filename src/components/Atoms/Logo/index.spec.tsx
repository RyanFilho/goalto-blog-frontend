import { render } from "@testing-library/react";
import { Logo } from ".";
import { BrowserRouter } from "react-router-dom";

describe('Logo Component', () => {
  it('should render the svg text', async () => {
    const { getByText } = render(<BrowserRouter><Logo /></BrowserRouter>)
    expect(getByText("Lorem ipsum!")).toBeTruthy();
  });
});