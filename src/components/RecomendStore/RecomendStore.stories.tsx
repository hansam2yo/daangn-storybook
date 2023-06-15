import RecomendStore, { RecomendStoreProps } from "./RecomendStore";
import { Meta, StoryObj } from "@storybook/react";
import { Box, Stack } from "@mui/material";
const meta: Meta<typeof RecomendStore> = {
  title: "RecomendStore",
  component: RecomendStore,
};

export default meta;

type Story = StoryObj<typeof RecomendStore>;

export const Default: Story = {
  args: {
    width: "100%",
  },
  render: (args: RecomendStoreProps) => {
    return (
      <Box width="100%">
        <Stack spacing={2}>
          <RecomendStore {...args}>인기매물 보기</RecomendStore>
          <RecomendStore {...args}>믿을 수 있는 중고거래</RecomendStore>
        </Stack>
      </Box>
    );
  },
};
