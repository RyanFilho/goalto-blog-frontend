import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from ".";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    type: "text",
    label: "Text Input",
    value: "Value",
    required: true,
  }
} as Meta<InputProps>

export const Default: StoryObj<InputProps> = {
  
}