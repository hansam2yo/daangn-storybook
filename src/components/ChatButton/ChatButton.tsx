import type { FC } from "react";
import { Box, Button, Stack } from "@mui/material";

export type ChatButtonProps = {};

const ChatButton: FC<ChatButtonProps> = (props) => {
  return (
    <Box sx={{ width: "80%" }}>
      <Stack spacing={2}>
        <Button
          variant="contained"
          sx={{
            margin: "2.4rem",
            display: "block",
            fontSize: "1.7rem",
            fontWeight: "600",
            letterSpacing: "-0.6px",
            color: "#ff8a3d",
            padding: "1.3rem",
            textDecoration: "none",
            WebkitBorderRadius: "100px",
            border: "solid 1px #ff8a3d",
            textAlign: "center",
            backgroundColor: "#ffff",
          }}
        >
          판매자와 채팅하기
        </Button>
      </Stack>
    </Box>
  );
};

export default ChatButton;
