import { FC } from "react";

type MenuIconProps = {
  className?: string;
};

const MenuIcon: FC<MenuIconProps> = (props) => {
  const { className } = props;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 5.00002C3 4.66865 3.26863 4.40002 3.6 4.40002H20.4C20.7314 4.40002 21 4.66865 21 5.00002C21 5.3314 20.7314 5.60002 20.4 5.60002H3.6C3.26863 5.60002 3 5.3314 3 5.00002Z"
        fill="#212124"
      ></path>
      <path
        d="M3 12C3 11.6687 3.26863 11.4 3.6 11.4H20.4C20.7314 11.4 21 11.6687 21 12C21 12.3314 20.7314 12.6 20.4 12.6H3.6C3.26863 12.6 3 12.3314 3 12Z"
        fill="#212124"
      ></path>
      <path
        d="M3 19C3 18.6687 3.26863 18.4 3.6 18.4H20.4C20.7314 18.4 21 18.6687 21 19C21 19.3314 20.7314 19.6 20.4 19.6H3.6C3.26863 19.6 3 19.3314 3 19Z"
        fill="#212124"
      ></path>
    </svg>
  );
};

export default MenuIcon;