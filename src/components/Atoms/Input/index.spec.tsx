import { render } from "@testing-library/react";
import { Input } from ".";

describe('Input component', () => {
  it('should render the input with text', async () => {
    const { getByText, getByDisplayValue } = render(<Input type="text" label="testLabel123" value="test321123" onChange={() => {}}/>)
    expect(getByText("testLabel123")).toBeTruthy();
    expect(getByDisplayValue("test321123")).toBeTruthy();
  });
});

