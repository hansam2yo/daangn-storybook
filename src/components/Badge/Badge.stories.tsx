import Badge, { BadgeProps } from "./Badge";
import { Meta, StoryObj } from "@storybook/react";
import { Box, Stack } from "@mui/material";
const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    width: "100%",
  },
  render: (args: BadgeProps) => {
    return (
      <Box width="100%">
        <Stack spacing={2}>
          <Badge {...args}>인기매물 보기</Badge>
        </Stack>
      </Box>
    );
  },
};
