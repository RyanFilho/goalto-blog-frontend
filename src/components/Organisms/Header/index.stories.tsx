
import { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/Header",
  component: Header,
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