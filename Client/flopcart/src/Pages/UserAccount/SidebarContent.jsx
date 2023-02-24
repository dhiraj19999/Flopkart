import { CloseButton } from "@chakra-ui/close-button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { FaRegAddressCard } from "react-icons/fa";
import { FiUser, FiStar, FiTrendingUp } from "react-icons/fi";
import { MdNoAccounts } from "react-icons/md";
import NavItem from "./NavItem";

const LinkItems = [
  { name: "User Information", icon: FiUser },
  { name: "Manage Address", icon: FaRegAddressCard },
  { name: "Orders", icon: FiTrendingUp },
  { name: "Favourites", icon: FiStar },
  { name: "Deactivate Account", icon: MdNoAccounts },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          PROFILE
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
