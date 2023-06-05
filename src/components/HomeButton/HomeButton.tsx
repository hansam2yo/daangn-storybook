import type { FC } from "react";
import { Box, Button, Stack } from "@mui/material";

export type HomeButtonProps = {};

const HomeButton: FC<HomeButtonProps> = (props) => {
  return (
    <Box sx={{ width: "30%" }}>
      <Stack spacing={2}>
        <Button
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "#f1f3f5",
          }}
        >
          인기매물 보기
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "#f1f3f5",
          }}
        >
          믿을 수 있는 중고거래
        </Button>
      </Stack>
    </Box>
  );
};

export default HomeButton;
