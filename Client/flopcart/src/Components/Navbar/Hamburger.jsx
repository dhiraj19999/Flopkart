import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// import { Menu, MenuButton, MenuItem, MenuList, Icon } from "@chakra-ui/react";

// import { BsMinecart, BsBagDash, BsSuitHeart, BsDownload } from "react-icons/bs";
// import { FaRegUserCircle } from "react-icons/fa";
// import { MdOutlineLogout } from "react-icons/md";

// import UserAvatar from "./UserAvatar";
import Hover from "../signup/Hover";

const Hamburger = () => {
  // const isAuth = useSelector((store) => store.authReducer);
  // console.log(isAuth);
  // const [name, setName] = useState("NA");
  // const [img, setImg] = useState(
  //   "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
  // );

  // useEffect(() => {
  //   if (isAuth.isLoggedIn) {
  //     setName(localStorage.getItem("user_name"));
  //   }
  // }, [isAuth.isLoggedIn]);

  return <Hover />;
};

export default Hamburger;

// Dropdown option under username
// const menuListHamburger = [
//   { icon: FaRegUserCircle, text: "My Profile" },
//   { icon: BsMinecart, text: "Cart" },
//   { icon: BsBagDash, text: "Orders" },
//   { icon: BsSuitHeart, text: "My Wishlist" },
//   { icon: BsDownload, text: "Download App" },
//   { icon: MdOutlineLogout, text: "Logout" },
// ];

// Avatar wala component
// <Menu>
//   <MenuButton>
//     <UserAvatar img={img} name={name} isLoggedIn={isAuth.isLoggedIn} />
//   </MenuButton>
//   <MenuList>
//     {menuListHamburger?.map((el) => (
//       <MenuItem
//         key={el.text}
//         icon={
//           <Icon as={el.icon} mt="6px" fontSize="16px" color="#2874f0" />
//         }
//       >
//         {el.text}
//       </MenuItem>
//     ))}
//   </MenuList>
// </Menu>
