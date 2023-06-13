import SearchIcon from "./SearchIcon";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchIcon> = {
  title: "Icons/SearchIcon",
  component: SearchIcon,
};

export default meta;

type Story = StoryObj<typeof SearchIcon>;

export const Default: Story = {
  render: () => <SearchIcon />,
};
