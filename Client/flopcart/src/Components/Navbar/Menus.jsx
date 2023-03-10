import React from "react";
import {
  BsMinecart,
  // BsLightningCharge,
  // BsPlusCircle,
  // BsBagDash,
  // BsSuitHeart,
  BsBell,
  BsQuestionCircle,
  BsDownload,
} from "react-icons/bs";
import { HiOutlineTrendingUp } from "react-icons/hi";

import { Flex, HStack, Link, Spacer, Tag, Text } from "@chakra-ui/react";

import DropDownMenu from "./DropDown";
import Hover from "../signup/Hover";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cartLength } from "../../redux/cartReducer/action";

const Menus = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((store) => store.cartReducer);
  useEffect(() => {
    dispatch(cartLength());
  }, [dispatch]);
  return (
    <Flex color="#f0f0f0" alignItems="center">
      <Hover />

      <Spacer />

      <Text fontWeight="bold" cursor="pointer">
        Become A Seller
      </Text>

      <Spacer />
      {/* More */}

      <DropDownMenu menuList={menuListMore} menuName="More" />

      <Spacer />

      {/* Cart */}
      <HStack cursor="pointer">
        <Tag
          pos="relative"
          top="-3"
          left="8"
          borderRadius="40%"
          bgColor="red"
          color="white"
          size="sm"
        >
          {carts.length || 0}
        </Tag>
        <BsMinecart size="20" />
        <Text fontWeight="bold">
          <Link href="/cart" _hover={{ textDecoration: "none" }}>
            Cart
          </Link>
        </Text>
      </HStack>
    </Flex>
  );
};

export default Menus;

// Dropdown option under username
// const menuListUser = [
//   { icon: FaRegUserCircle, text: "My Profile" },
//   { icon: BsLightningCharge, text: "SuperCoin Zone" },
//   { icon: BsPlusCircle, text: "Flipkart Plus Zone" },
//   { icon: BsBagDash, text: "Orders" },
//   { icon: BsSuitHeart, text: "Wishlist" },
//   { icon: RiCoupon3Line, text: "Coupons" },
// ];

// Dropdown option under More menu
const menuListMore = [
  { icon: BsBell, text: "Notification Preferences" },
  { icon: BsQuestionCircle, text: "24x7 Customer Care" },
  { icon: HiOutlineTrendingUp, text: "Advertise" },
  { icon: BsDownload, text: "DownloadApp" },
];
