import MannerOndo from "./MannerOndo";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MannerOndo> = {
  title: "MannerOndo",
  component: MannerOndo,
};

export default meta;

type Story = StoryObj<typeof MannerOndo>;

export const Default: Story = {
  //args로 props제어
  render: () => <MannerOndo />,
};
