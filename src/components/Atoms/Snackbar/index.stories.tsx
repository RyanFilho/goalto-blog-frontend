import { Meta, StoryObj } from "@storybook/react";
import { Snackbar, ISnackbarProps } from ".";

export default {
  title: "Components/Snackbar",
  component: Snackbar,
  args: {
    message: "The snackbar message!!"
  },
} as Meta<ISnackbarProps>

export const Default: StoryObj<ISnackbarProps> = {
  
}