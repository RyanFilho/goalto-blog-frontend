import { render } from "@testing-library/react";
import { Button } from ".";

describe('Button component', () => {
  it('should render button with text', async () => {
    const { getByText } = render(<Button type="button">Teste Button</Button>)
    expect(getByText("Teste Button")).toBeTruthy();
  });
});

