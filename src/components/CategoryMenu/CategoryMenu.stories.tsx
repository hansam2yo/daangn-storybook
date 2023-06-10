import CategoryMenu, { CategoryMenuProps } from "./CategoryMenu";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CategoryMenu> = {
  title: "CategoryMenu",
  component: CategoryMenu,
};

export default meta;

type Story = StoryObj<typeof CategoryMenu>;

export const Default: Story = {
  args: {
    clickable: true,
    data: [
      { label: "전체", selected: true },
      { label: "식당", selected: false },
      { label: "카페", selected: false },
      { label: "용달/이사", selected: false },
      { label: "뷰티/미용", selected: false },
      { label: "헬스/필라테스/요가", selected: false },
    ],
  },
  render: (args: CategoryMenuProps) => <CategoryMenu {...args} />,
};
