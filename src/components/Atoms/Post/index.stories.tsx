import { Meta, StoryObj } from "@storybook/react";
import { Post, IPostProps } from ".";

export default {
  title: "Components/Post",
  component: Post,
  args: {
    post: {
      title: "It is the title!",
      content: "Here is the html text! <br/> We can see images: <br/> <img src='https://www.surfnewsnetwork.com/wp-content/uploads/2023/05/wsl-cs-finals-ready-728x364.png' width='450' height='200'>",
      author: "Ryan Sampaio",
    }
  },
} as Meta<IPostProps>

export const Default: StoryObj<IPostProps> = {
  
}