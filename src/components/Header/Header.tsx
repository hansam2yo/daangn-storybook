import type { FC } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../icons/Logo/Logo";

export type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  return (
    <AppBar
      sx={{
        background: "#ffffff",
      }}
    >
      <Toolbar>
        <Logo />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton size="large" aria-label="search" color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton size="large" edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

// 1. Alert 컴포넌트 만들기
//   1-1. 앞에 확성기 아이콘 노출 및 알림 텍스트노출
//   1-2. 컴포넌트 인터페이스 설계 (props )
//   /*
//   {
//     type: 'info' | 'warning',
//     title: string,
//     description: string,
//   }
//   */
// 2. 스토리북 생성
//  텍스트를 어떻게 넣어주냐 타이핑 맞아.., mockData 파일분리해서 넣어도대!
