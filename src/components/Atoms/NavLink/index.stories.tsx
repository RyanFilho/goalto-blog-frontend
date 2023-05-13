import { Meta, StoryObj } from "@storybook/react";
import { NavLink, NavLinkProps } from ".";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/NavLink",
  component: NavLink,
  args: {
    label: "About",
    link: "#"
  },
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          {Story()}
        </BrowserRouter>
      )
    }
  ]
} as Meta<NavLinkProps>

export const Default: StoryObj<NavLinkProps> = {
  
}