import { Meta, StoryObj } from "@storybook/react";
import { Logo } from ".";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/Logo",
  component: Logo,
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          {Story()}
        </BrowserRouter>
      )
    }
  ]
} as Meta

export const Default: StoryObj = {
  
}