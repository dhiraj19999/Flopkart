import React from "react";

import { Menu, MenuButton, MenuItem, MenuList, Icon } from "@chakra-ui/react";

import { BsMinecart, BsBagDash, BsSuitHeart, BsDownload } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

import UserAvatar from "./UserAvatar";

const Hamburger = () => {
  return (
    <Menu>
      <MenuButton>
        <UserAvatar img={"https://bit.ly/ryan-florence"} name="Ryan Florence" />
      </MenuButton>
      <MenuList>
        {menuListHamburger?.map((el) => (
          <MenuItem
            key={el.text}
            icon={
              <Icon as={el.icon} mt="6px" fontSize="16px" color="#2874f0" />
            }
          >
            {el.text}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Hamburger;

// Dropdown option under username
const menuListHamburger = [
  { icon: FaRegUserCircle, text: "My Profile" },
  { icon: BsMinecart, text: "Cart" },
  { icon: BsBagDash, text: "Orders" },
  { icon: BsSuitHeart, text: "My Wishlist" },
  { icon: BsDownload, text: "Download App" },
  { icon: MdOutlineLogout, text: "Logout" },
];
