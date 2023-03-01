import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
  Image,
  FormControl,
  Input,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  login,
  loginError,
  loginSuccess,
} from "../../redux/authReducer/action";

import { useSelector } from "react-redux";
import { loadData } from "../../utils/accessLocalstorage";

const Login = () => {
  const { isLoggedIn } = useSelector((store) => store.authReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  // const { loading, error } = userLogin;
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(email, password);
    if (email !== "" && password !== "") {
      dispatch(login(email, password)).then(() => {
        toast({
          title: "Account created.",
          description: "We've logged in your account for you.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        setLoading(false);
      });
    } else {
      toast({
        title: "Oops! Looks like something is missing.",
        description: "Please enter your crendentials.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Text
        p="4px 30px"
        _hover={{ bg: "" }}
        textAlign="center"
        fontSize={"15px"}
        onClick={onOpen}
        bg="white"
        // h="31px"
        // w="9.5%"
        // p='0px 20px'
        fontWeight="700"
        color="#2874f0"
        ml="19px"
        // pt="2px"
        borderRadius="2px"
        cursor="pointer"
        // border={'1px solid #dbdbdb'}
      >
        {isLoggedIn ? loadData("firstName") : "Login"}
      </Text>
      <Modal isOpen={isOpen} onClose={onClose} size={{base:"sm",md:"xl",lg:"2xl"}} padding="0px">
        <ModalOverlay />

        <ModalContent>
          <ModalBody padding="-1.5">
            <ModalCloseButton
              size="lg"
              color="white"
              marginRight="-3.5rem"
              marginTop="-4"
            />
            <div style={{ display: "flex" }}>
              <Box  display={{base:"none",md:"block",lg:"block"}} height="32rem" bg="#2874f0" width="16rem" padding="35px">
                <Text fontWeight="500" color="white" fontSize="3xl">
                  Login
                </Text>
                <Text
                  fontWeight="500"
                  marginTop="15px"
                  color="#Dbdbdb"
                  fontSize="1xl"
                >
                  Get access to your <br /> Orders, Wishlist and Recommendations
                </Text>
                <Image
                  marginTop="10rem"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                  aend="image"
                />
              </Box>
              <Box height="32rem" padding="35" width="24rem" color="#878787">
                <FormControl isRequired>
                  <>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      color="black"
                      marginTop="-3"
                      name="email"
                      variant="flushed"
                      placeholder="Enter Email"
                      required
                    />
                    <Text color="red" fontSize="xs"></Text>
                  </>

                  <>
                    <FormLabel marginTop="5">Password</FormLabel>
                    <Input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      color="black"
                      marginTop="-3"
                      name="password"
                      type="password"
                      variant="flushed"
                      placeholder="Enter Password"
                      required
                    />
                    <Text color="red" fontSize="xs"></Text>
                  </>

                  <Text marginTop="5" fontSize="xs">
                    By continuing, you agree to Flipkart's{" "}
                    <Link color="#2f74f0" href="">
                      Terms of Use
                    </Link>
                    and
                    <Link color="#2f74f0" href="">
                      Privacy Policy.
                    </Link>
                  </Text>

                  <Button
                    isLoading={loading ? true : false}
                    onClick={submitHandler}
                    borderRadius="0.5"
                    marginTop="4"
                    padding="6"
                    color="white"
                    w="19.7rem"
                  >
                    Login
                  </Button>

                  <Text marginTop="2" marginBottom="2" textAlign="center">
                    OR
                  </Text>

                  <Link>
                    <Text
                      display={"flex"}
                      justifyContent="center"
                      alignItems="center"
                      marginTop="2"
                      bg="white"
                      textAlign="center"
                      color="#2f74f0"
                    >
                      New to Flipkart? {<Signup onClose={onClose} />}{" "}
                    </Text>{" "}
                  </Link>
                </FormControl>
              </Box>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Login;
