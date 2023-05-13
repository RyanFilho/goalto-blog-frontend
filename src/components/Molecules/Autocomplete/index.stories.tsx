
import { Meta, StoryObj } from "@storybook/react";
import { Autocomplete } from "./index";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/Autocomplete",
  component: Autocomplete,
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