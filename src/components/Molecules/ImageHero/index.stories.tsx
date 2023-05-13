import { Meta, StoryObj } from "@storybook/react";
import { ImageHero, ImageHeroProps } from "./index";

export default {
  title: "Components/ImageHero",
  component: ImageHero,
  args: {
    imageUrl: "https://www.btgpactual.com/libs/btg-pactual-menu/images/para-empresa.webp",
    title: "The title!",
    subtitle: "The subtitle!",
  }
} as Meta<ImageHeroProps>

export const Default: StoryObj<ImageHeroProps> = {
  
}