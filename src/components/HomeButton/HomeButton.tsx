import type { FC, PropsWithChildren } from "react";
import { Button, Link, Typography } from "@mui/material";

export type HomeButtonProps = PropsWithChildren<{
  width?: string | number;
}>;

const BUTTON_BACKGROUND_COLOR = "#f1f3f5";
const BUTTON_TEXT_COLOR = "#212529";

const HomeButton: FC<HomeButtonProps> = (props) => {
  const { children, width } = props;

  return (
    <Button
      variant="contained"
      sx={(theme) => ({
        width,
        color: BUTTON_TEXT_COLOR,
        backgroundColor: `${BUTTON_BACKGROUND_COLOR} !important`,
        border: "none",
        borderRadius: "6px",
        textDecoration: "none",
        padding: "10.5px 36px",
        display: "inline-block",
      })}
    >
      <Typography variant="h4">
        <Link sx={{ color: "inherit" }} underline="none">
          {children}
        </Link>
      </Typography>
    </Button>
  );
};

export default HomeButton;
