
import { Meta, StoryObj } from "@storybook/react";
import { AutocompleteSearchBar } from "./index";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/AutocompleteSearchBar",
  component: AutocompleteSearchBar,
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