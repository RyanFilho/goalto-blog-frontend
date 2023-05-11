import { Meta, StoryObj } from "@storybook/react";
import { Title, TitleProps } from "./Title";

export default {
  title: "Components/Title",
  component: Title,
  args: {
    title: "Hello! It's just a test."
  }
} as Meta<TitleProps>

export const Default: StoryObj<TitleProps> = {
  
}