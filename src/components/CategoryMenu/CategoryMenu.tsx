import type { FC } from "react";
import { Box, Button, Stack } from "@mui/material";

export type CategoryMenuProps = {};

const CategoryMenu: FC<CategoryMenuProps> = (props) => {
  return (
    <Box sx={{ width: "50%" }}>
      <Stack direction="row" spacing={1}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "100%",
            WebkitBorderRadius: "100px",
            border: "solid 1px #f0f3f5",
            backgroundColor: "#474749",
          }}
        >
          전체
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "100%",
            WebkitBorderRadius: "100px",
            border: "solid 1px #f0f3f5",
            backgroundColor: "#ffff",
          }}
        >
          식당
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "100%",
            WebkitBorderRadius: "100px",
            border: "solid 1px #f0f3f5",
            backgroundColor: "#ffff",
          }}
        >
          카페
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "100%",
            WebkitBorderRadius: "100px",
            border: "solid 1px #f0f3f5",
            backgroundColor: "#ffff",
          }}
        >
          용달/이사
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "100%",
            WebkitBorderRadius: "100px",
            border: "solid 1px #f0f3f5",
            backgroundColor: "#ffff",
          }}
        >
          뷰티/미용
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "100%",
            WebkitBorderRadius: "100px",
            border: "solid 1px #f0f3f5",
            backgroundColor: "#ffff",
          }}
        >
          헬스/필라테스/요가
        </Button>
      </Stack>
    </Box>
  );
};

export default CategoryMenu;
