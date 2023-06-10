import CategoryMenu from "./CategoryMenu";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CategoryMenu> = {
  title: "CategoryMenu",
  component: CategoryMenu,
};

export default meta;

type Story = StoryObj<typeof CategoryMenu>;

export const Default: Story = {
  //args로 props제어
  render: () => <CategoryMenu />,
};
