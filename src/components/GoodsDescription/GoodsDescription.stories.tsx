import GoodsDescription, { GoodsDescriptionProps } from "./GoodsDescription";
import { Meta, StoryObj } from "@storybook/react";
import { Box, Stack } from "@mui/material";
const meta: Meta<typeof GoodsDescription> = {
  title: "GoodsDescription",
  component: GoodsDescription,
};

export default meta;

type Story = StoryObj<typeof GoodsDescription>;

export const Default: Story = {
  args: {
    width: "100%",
  },
  render: (args: GoodsDescriptionProps) => {
    return (
      <Box width="100%">
        <Stack spacing={2}>
          <GoodsDescription {...args}>인기매물 보기</GoodsDescription>
        </Stack>
      </Box>
    );
  },
};
