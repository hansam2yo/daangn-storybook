import type { FC, PropsWithChildren } from "react";
import { Stack, Chip } from "@mui/material";

export type BadgeProps = PropsWithChildren<{
  width?: string | number;
}>;

const Badge: FC<BadgeProps> = (props) => {
  return (
    <Stack direction="row" spacing={1} borderRadius={2}>
      <Chip label="친절해요" />
      <Chip label="가격이 싸요" />
      <Chip label="만족스러워요" />
    </Stack>
  );
};

export default Badge;
