import { CloseButton } from "@chakra-ui/close-button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import { FaRegAddressCard } from "react-icons/fa";
import { FiUser, FiTrendingUp } from "react-icons/fi";
import { MdNoAccounts } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../redux/authReducer/action";
import { loadData } from "../../utils/accessLocalstorage";
import NavItemAdmin from "./NavItemAdmin";

const SidebarContentAdmin = ({ onClose, handleRenderInfo, ...rest }) => {
  const navigate = useNavigate();
  const toast = useToast();

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(Logout());
  };

  const deleteAccount = async () => {
    console.log("Deactivating");
    fetch("https://flopkart-backend-api.onrender.com/user/delete/" + loadData("_id"), {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        toast({
          position: "top",
          title: "Account Deactivated Successfully.",
          description: "We've deactivated your account for you.",
          status: "success",
          bgColor: "blue",
          duration: 9000,
          isClosable: true,
        });
        logout();
        navigate("/");
      });
  };

  const LinkItems = [
    {
      name: "Admin Information",
      icon: FiUser,
      link: "/adminprofile",
      handleRenderInfo,
      render: "adminInfoRender",
    },
    {
      name: "Manage Users",
      icon: FaRegAddressCard,
      link: "/allusers",
      handleRenderInfo,
      render: "manageUsersRender",
    },
    {
      name: "Manage Products",
      icon: FiTrendingUp,
      link: "/allproducts",
      handleRenderInfo,
      render: "manageProductsRender",
    },
    {
      name: "Deactivate Account",
      icon: MdNoAccounts,
      deactivateAccount: deleteAccount,
    },
  ];

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
        <NavItemAdmin
          key={link.name}
          icon={link.icon}
          bgColor={link.deactivateAccount ? "pink" : "none"}
          onClick={link.deactivateAccount}
          link={link.link}
          handleRenderInfo={link.handleRenderInfo}
          render={link.render}
        >
          {link.name}
        </NavItemAdmin>
      ))}
    </Box>
  );
};

export default SidebarContentAdmin;
