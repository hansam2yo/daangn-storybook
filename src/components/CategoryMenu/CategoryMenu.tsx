import type { FC } from "react";
import { Box, Chip, ChipProps, Stack } from "@mui/material";

export type CategoryMenuProps = {
  data: Array<{
    label: string;
    selected: boolean;
  }>;
  clickable?: ChipProps["clickable"];
};

const SELECTED_BACKGROUND_CHIP = "#4d5159";

const CategoryMenu: FC<CategoryMenuProps> = (props) => {
  const { data, clickable = true } = props;

  const commonChipProps: ChipProps = {
    clickable,
  };

  const selectedChipProps: ChipProps = {
    ...commonChipProps,
    variant: "filled",
    sx: (theme) => ({
      background: SELECTED_BACKGROUND_CHIP,
      color: theme.palette.common.white,
      "&:hover": {
        background: SELECTED_BACKGROUND_CHIP,
      },
    }),
  };
  const defaulChipProps: ChipProps = {
    ...commonChipProps,
    variant: "outlined",
    sx: (theme) => ({
      background: theme.palette.common.white,
    }),
  };

  return (
    <Box sx={{ width: "50%" }}>
      <Stack direction="row" spacing={1}>
        {data.map((item) => {
          const chipProps = item.selected ? selectedChipProps : defaulChipProps;

          return <Chip label={item.label} {...chipProps} />;
        })}
      </Stack>
    </Box>
  );
};

export default CategoryMenu;
