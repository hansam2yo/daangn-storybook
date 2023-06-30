import StoreReview, { StoreReviewProps } from "./StoreReview";
import { Meta, StoryObj } from "@storybook/react";
import { Box, Stack } from "@mui/material";
const meta: Meta<typeof StoreReview> = {
  title: "StoreReview",
  component: StoreReview,
};

export default meta;

type Story = StoryObj<typeof StoreReview>;

export const Default: Story = {
  render: (args: StoreReviewProps) => {
    return (
      <Box width="100%">
        <Stack spacing={2}>
          <StoreReview {...args}>인기매물 보기</StoreReview>
          <StoreReview {...args}>믿을 수 있는 중고거래</StoreReview>
        </Stack>
      </Box>
    );
  },
};
