import { Meta, StoryObj } from "@storybook/react";
import { TextArea, ITextAreaProps } from ".";

export default {
  title: "Components/TextArea",
  component: TextArea,
  args: {
    label: "The label!",
    value: "The value!",
  },
} as Meta<ITextAreaProps>

export const Default: StoryObj<ITextAreaProps> = {
  
}