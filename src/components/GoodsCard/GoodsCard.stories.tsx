import GoodsCard, { GoodsCardProps } from "./GoodsCard";
import { Meta, StoryObj } from "@storybook/react";
import { Box, Stack } from "@mui/material";
const meta: Meta<typeof GoodsCard> = {
  title: "GoodsCard",
  component: GoodsCard,
};

export default meta;

type Story = StoryObj<typeof GoodsCard>;

export const Default: Story = {
  args: {
    width: "100%",
  },
  render: (args: GoodsCardProps) => {
    return (
      <Box width="100%">
        <Stack spacing={2}>
          <GoodsCard {...args}>인기매물 보기</GoodsCard>
          <GoodsCard {...args}>믿을 수 있는 중고거래</GoodsCard>
        </Stack>
      </Box>
    );
  },
};
