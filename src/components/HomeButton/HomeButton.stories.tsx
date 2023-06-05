import HomeButton from "./HomeButton";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HomeButton> = {
  title: "HomeButton",
  component: HomeButton,
};

export default meta;

type Story = StoryObj<typeof HomeButton>;

export const Default: Story = {
  //args로 props제어
  render: () => <HomeButton />,
};
