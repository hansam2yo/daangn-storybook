import type { FC } from "react";
import { AppBar, Box, IconButton, Link, Toolbar } from "@mui/material";
import MenuIcon from "../../icons/MenuIcon/MenuIcon";
import Logo from "../../icons/Logo/Logo";
import SearchIcon from "../../icons/SearchIcon/SearchIcon";
import { makeStyles } from "tss-react/mui";

export type HeaderProps = {
  logoLink: string;
  onSearchIconClick: () => void;
  onMenuIconClick: () => void;
};

const useStyles = makeStyles()((theme) => ({
  searchIcon: {
    cursor: "pointer",
  },
}));

const Header: FC<HeaderProps> = (props) => {
  const { logoLink, onSearchIconClick, onMenuIconClick } = props;
  const { classes } = useStyles();

  return (
    <AppBar
      sx={(theme) => ({
        background: theme.palette.common.white,
        boxShadow: "initial",
      })}
    >
      <Toolbar
        sx={{
          padding: "12px 16px",
          minHeight: "56px !important",
          boxShadow: "initial",
        }}
      >
        <Link href={logoLink}>
          <Logo />
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={onSearchIconClick} className={classes.searchIcon}>
          <SearchIcon />
        </IconButton>
        <IconButton onClick={onMenuIconClick}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
