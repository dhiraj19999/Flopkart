import React from "react";
import Login from "./Login";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
  Box,
  Center,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { RiInboxUnarchiveFill, RiCoupon3Fill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { FiPower } from "react-icons/fi";
import Signup from "./Signup";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/authReducer/action";

const Hover = () => {
  const { isLoggedIn } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(Logout());
  };

  return (
    <div>
      <Popover trigger="hover">
        <PopoverTrigger>
          <Box>
            <Login />
          </Box>
        </PopoverTrigger>
        <PopoverContent
          zIndex={4}
          bg="white"
          color="white"
          w="250px"
          borderRadius="2px"
          mt="5px"
        >
          <PopoverArrow bg="white" />
          <PopoverCloseButton />
          <PopoverBody color="black">
            <Flex h="56px" justifyContent="space-between">
              <Center fontWeight="600" fontSize="14px">
                New Customer?
              </Center>
              <Center>
                <Link>
                  {/* Sign Up */}
                  <Signup />
                </Link>
              </Center>
            </Flex>
            <hr margin="0px" />
            <Flex cursor={"pointer"} h="49px" fontSize="14px" className="pop1">
              <Center ml="10px">
                <HiUserCircle color="#2874f0" size="18px" />
              </Center>{" "}
              <Center ml="16px">My Profile</Center>
            </Flex>
            <hr />
            <Flex cursor={"pointer"} className="pop1" h="49px" fontSize="14px">
              <Center ml="10px">
                <Image
                  src="https://flipkart-clone-project-m.netlify.app/static/media/icon1.0ffedd5289232ef3421f490990184573.svg"
                  alt="vikas"
                />
              </Center>{" "}
              <Center ml="16px">Flipkart Plus Zone</Center>
            </Flex>
            <hr />
            <Flex cursor={"pointer"} h="49px" fontSize="14px" className="pop1">
              <Center ml="10px">
                <RiInboxUnarchiveFill color="#2874f0" size="18px" />
              </Center>
              <Center ml="16px">Orders</Center>
            </Flex>
            <Flex cursor={"pointer"} h="49px" fontSize="14px" className="pop1">
              {" "}
              <Center ml="10px">
                <AiFillHeart color="#2874f0" size="18px" />
              </Center>{" "}
              <Center ml="16px"> Wishlist</Center>
            </Flex>
            <hr />
            <Flex cursor={"pointer"} h="49px" fontSize="14px" className="pop1">
              {" "}
              <Center ml="10px">
                <RiCoupon3Fill color="#2874f0" size="18px" />
              </Center>
              <Center ml="16px">Rewards</Center>
            </Flex>
            <hr />
            <Flex cursor={"pointer"} h="49px" fontSize="14px" className="pop1">
              <Center ml="10px">
                <BsFillCreditCard2BackFill color="#2874f0" size="18px" />
              </Center>
              <Center ml="16px">Gift cards</Center>
            </Flex>
            <hr />
            {isLoggedIn ? (
              <>
                <Flex
                  onClick={logout}
                  cursor={"pointer"}
                  h="49px"
                  fontSize="14px"
                  className="pop1"
                >
                  <Center ml="10px">
                    <FiPower color="#2874f0" size="18px" />
                  </Center>
                  <Center ml="16px">Log out</Center>
                </Flex>
                <hr />
              </>
            ) : null}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Hover;
