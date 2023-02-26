import React, { useEffect, useState } from "react";
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

import SidebarContent from "./SidebarContentAdmin";
import UserProfileEdit from "../UserAccount/UserProfileEdit";
import MobileNavAdmin from "./MobileNavAdmin";
import AllUsers from "./Users/AllUsers";
import AllProducts from "./Products/AllProducts";

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [adminInfoRender, setAdminInfoRender] = useState(false);
  const [manageUsersRender, setManageUsersRender] = useState(false);
  const [manageProductsRender, setManageProductsRender] = useState(false);

  const handleRenderInfo = (text) => {
    if (text === "adminInfoRender") {
      setAdminInfoRender(true);
      setManageProductsRender(false);
      setManageUsersRender(false);
    } else if (text === "manageUsersRender") {
      setAdminInfoRender(false);
      setManageProductsRender(false);
      setManageUsersRender(true);
    } else if (text === "manageProductsRender") {
      setAdminInfoRender(false);
      setManageProductsRender(true);
      setManageUsersRender(false);
    }
  };

  useEffect(() => {
    handleRenderInfo("adminInfoRender");
  }, []);

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        handleRenderInfo={handleRenderInfo}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNavAdmin onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
        {adminInfoRender && <UserProfileEdit />}
        {manageProductsRender && <AllProducts />}
        {manageUsersRender && <AllUsers />}
      </Box>
    </Box>
  );
}
