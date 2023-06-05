import type { FC } from "react";
import { Box, Button, Stack } from "@mui/material";

export type HomeButtonProps = {};

const HomeButton: FC<HomeButtonProps> = (props) => {
  return (
    <Box sx={{ width: "50%" }}>
      <Stack spacing={2}>
        <Button
          variant="contained"
          sx={{
            fontSize: "1.8rem",
            color: "#212529",
            backgroundColor: "#f1f3f5",
            border: "none",
            borderRadius: "6px",
            textDecoration: "none",
            padding: "1.45rem 2.6rem",
            display: "inline-block",
          }}
        >
          인기매물 보기
        </Button>
        <Button
          variant="contained"
          sx={{
            fontSize: "1.8rem",
            color: "#212529",
            backgroundColor: "#f1f3f5",
            border: "none",
            borderRadius: "6px",
            textDecoration: "none",
            padding: "1.45rem 2.6rem",
            display: "inline-block",
          }}
        >
          믿을 수 있는 중고거래
        </Button>
      </Stack>
    </Box>
  );
};

export default HomeButton;
