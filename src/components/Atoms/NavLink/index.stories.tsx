import { Meta, StoryObj } from "@storybook/react";
import { NavLink, NavLinkProps } from ".";

export default {
  title: "Components/NavLink",
  component: NavLink,
  args: {
    label: "About",
    href: "#"
  }
} as Meta<NavLinkProps>

export const Default: StoryObj<NavLinkProps> = {
  
}