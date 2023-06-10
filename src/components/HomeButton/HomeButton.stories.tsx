import HomeButton, { HomeButtonProps } from "./HomeButton";
import { Meta, StoryObj } from "@storybook/react";
import { Box, Stack } from "@mui/material";
const meta: Meta<typeof HomeButton> = {
  title: "HomeButton",
  component: HomeButton,
};

export default meta;

type Story = StoryObj<typeof HomeButton>;

export const Default: Story = {
  args: {
    width: "100%",
  },
  render: (args: HomeButtonProps) => {
    return (
      <Box width="100%">
        <Stack spacing={2}>
          <HomeButton {...args}>인기매물 보기</HomeButton>
          <HomeButton {...args}>믿을 수 있는 중고거래</HomeButton>
        </Stack>
      </Box>
    );
  },
};
