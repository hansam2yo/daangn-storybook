import ChatButton from "./ChatButton";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChatButton> = {
  title: "ChatButton",
  component: ChatButton,
};

export default meta;

type Story = StoryObj<typeof ChatButton>;

export const Default: Story = {
  //args로 props제어
  render: () => <ChatButton />,
};
