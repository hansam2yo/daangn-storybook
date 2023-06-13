import MenuIcon from "./MenuIcon";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MenuIcon> = {
  title: "Icons/MenuIcon",
  component: MenuIcon,
};

export default meta;

type Story = StoryObj<typeof MenuIcon>;

export const Default: Story = {
  render: () => <MenuIcon />,
};
