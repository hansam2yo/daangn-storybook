import { Box } from "@mui/material";
import Header, { HeaderProps } from "./Header";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "components/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    logoLink: "#",
  },
  render: (args: HeaderProps) => {
    return (
      <Box bgcolor="#FBF7F2" height="100vh">
        <Header {...args} />
      </Box>
    );
  },
};
