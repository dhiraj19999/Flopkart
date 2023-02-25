import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Spacer,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { CheckIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import { MdSecurity } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const toast = useToast();
 const [confirm, setConfirm] = useState(false)
  const [allFilled, setAllFilled] = useState(true);
  const [address, setAddress] = useState({
    Name: "",
    Number: "",
    Pincode: "",
    Email: "",
    Address: "",
    City: "",
    State: "",
  });

  const { Name, Number, Pincode, Email, Address, City, State } = address;
  const handelChange = (e) => {
    // const { name , value } = e.target;
    // setAddress(e.target)
    // console.log(address);
    const { value, name } = e.target;
    setAddress({ ...address, [name]: value });
    if (
      address.Name !== "" &&
      address.Number !== "" &&
      address.Pincode !== "" &&
      address.Email !== "" &&
      address.Address !== "" &&
      address.City !== "" &&
      address.State !== ""
    ){
      setAllFilled(false)
    }
  };

  const handelCheckAddress = () => {
   
    if (
      address.Name !== "" &&
      address.Number !== "" &&
      address.Pincode !== "" &&
      address.Email !== "" &&
      address.Address !== "" &&
      address.City !== "" &&
      address.State !== ""
    ) {

      toast({
        title: "Thanks",
        description: "Your details are saved.",
        status:"success",
        duration: 9000,
        
      });
      setConfirm(true)

     

      // return <Navigate to='/summary' />
    } else {
  
      
        toast({
          title: "Oops",
          description: "Please fill all the details.",
          duration: 9000,
          status:"error",
          isClosable: true,
        });
      ;
    }
  };

  return (
    
    <Box w="100%" pt="20" bg="#f1f3f6">
      <Flex
        w="82%"
        //  h='50vh'
        //  bg="pink"
        margin="auto"
        display="flex"
        flexDirection={{base:"column",md:"row"}}
        alignItems={{base:"center",md:"start"}}
        justifyContent="space-between"
      >
        {/*LEFT BOX  */}
        <Box
       
          w={{base:"95%",md:"69%"}}
          //  h='40vh'
          bg="#f1f3f6"
        >
          {/* Left top 1 */}
          <Box
          
            w="100%"
            h="10vh"
            bg="white"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            shadow="md"
          >
            <Box ml="6" display="flex" alignItems="center">
              <Box
                bg="#f1f3f6"
                pl="2"
                pr="2"
                color="blue"
                mr="4"
                borderRadius="2"
              >
                
                1
              </Box>
              <Text fontWeight="500" color="grey">
                LOGIN
              </Text>
              <CheckIcon ml="3" color="blue.600" />
            </Box>
            <Box>
              <Button
                mr="6"
                colorScheme="blue"
                variant="outline"
                borderRadius="0"
                border="1px solid blue"
              >
                CHANGE
              </Button>
            </Box>
          </Box>

          {/* Top Box 2 */}

          <Box w="100%" h="7vh" bg="#2874f0" mt="4" display="flex">
            <Box ml="6" display="flex" alignItems="center">
              <Box
                bg="white"
                pl="2"
                pr="2"
                color="blue"
                mr="4"
                borderRadius="2"
              >
                2
              </Box>
              <Text fontWeight="500" color="white">
                DELIVERY ADDRESS
              </Text>
            </Box>
          </Box>

          {/* Top Box 3 FORM */}

          <Box
            w="100%"
            h="75vh"
            bg="#f5faff"
            display="block"
            shadow="md"
            pl="10"
            py="40px"

          >
            <Box mb="40px" mt="-20px" display="flex">
              <InfoOutlineIcon mr="4" color="red" />
              <Text color="red" fontWeight="500" mt="-1" mb="2" fontSize="sm">
                
                All fileds are mandatory !
              </Text>
            </Box>
            <>
            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          <Image src="http://www.shikharclasses.in/wp-content/uploads/2020/04/PAYMENT-SUCCESS.png" /> <br />
          <Image m="auto" mt="-6" w="250px" src="http://www.dealnloot.com/wp-content/uploads/2017/11/Flipkart.png" />
          </ModalBody>

          <ModalFooter >
          
            <Button bg="#fb641b" borderRadius="0"  m="auto" colorScheme='blue'>
             <NavLink to ="/"> Shop More </NavLink>
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
            </>
            <Box  display="flex" flexDirection={{base:"column" ,md:"row"}} justifyContent="space-evenly" mt="-10" w="80%">
              <Input
                value={Name}
                onChange={handelChange}
                name="Name"
                placeholder="Name"
                w={{base:"100%",md:"45%"}}
                border="2px solid "
                bg="white"
                p="6"
              />
              <Input
                value={Number}
                onChange={handelChange}
                type="number"
                name="Number"
                placeholder="Mobile Number"
                w={{base:"100%",md:"45%"}}
                border="2px solid "
                bg="white"
                p="6"
              />
            </Box>

            <Box display="flex" flexDirection={{base:"column" ,md:"row"}} justifyContent="space-evenly" mt="4" w="80%">
              <Input
                value={Email}
                onChange={handelChange}
                name="Email"
                type={"email"}
                placeholder="Email"
                w={{base:"100%",md:"45%"}}
                border="2px solid "
                bg="white"
                p="6"
              />
              <Input
                value={Pincode}
                onChange={handelChange}
                name="Pincode"
                type={"number"}
                placeholder="Pincode"
                w={{base:"100%",md:"45%"}}
                border="2px solid "
                bg="white"
                p="6"
              />
            </Box>
            <Box display="flex" flexDirection={{base:"column" ,md:"row"}} justifyContent="space-evenly" mt="4" w="80%">
              {/* <Input  placeholder='Address' w='93.5%' border='2px solid ' bg='white' p='6' /> */}
              <Textarea
                value={Address}
                onChange={handelChange}
                type="text"
                name="Address"
                placeholder="Address"
                w="100%"
                border="2px solid "
                bg="white"
                pl="6"
                resize="none"
                h="20"
              />
            </Box>
            <Box display="flex" flexDirection={{base:"column" ,md:"row"}} justifyContent="space-evenly" mt="4" w="80%">
              <Input
                value={City}
                onChange={handelChange}
                name="City"
                placeholder="City/District/Town"
                w={{base:"100%",md:"45%"}}
                border="2px solid "
                bg="white"
                p="6"
              />
              <Input
                value={State}
                onChange={handelChange}
                name="State"
                placeholder="State"
                w={{base:"100%",md:"45%"}}
                border="2px solid "
                bg="white"
                p="6"
              />
            </Box>
            <Box display="flex"  ml={{base:"0",md:"5"}}  mt={allFilled ? "4" : "1"} w="80%">
        
              <Button
                isDisabled = {allFilled}
                color="white"
                onClick={handelCheckAddress}
                bg="#fb641b"
                w={{base:"100%",md:"45%"}}
                borderRadius="0"
                mr={{base:"0",md:"10"}}
                py="5"
               
              >
                SAVE AND DELIVER HERE
              </Button>
              <Button display={confirm ?"flex":"none"}   bg="#fb641b" color="white" borderRadius="0" onClick={onOpen}>Confirm Delivey</Button>
            </Box>
          </Box>

         
        </Box>

        {/* Right BOX */}
        <Box
         
          w="29.5%"
          h="80vh"
          bg="white"
          position="sticky"
          top="0"
          shadow="sm"
        >
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            bg="white"
            w="100%"
            h="12"
          >
            <Text ml="5" fontWeight="500" color="grey">
              PRICE DETAILS
            </Text>
          </Box>
          <hr style={{ color: "black" }} />
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            bg="white"
          >
            <Text ml="5" mt="5" fontWeight="400" fontSize="18px" color="black">
              Price ({cartItems.length} items)
            </Text>
            <Spacer />
            <Text mr="5" mt="5" fontWeight="400" fontSize="18px" color="black">
              ₹"actual price"
            </Text>
          </Box>
          {/* < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' >
      <Text ml='5' mt='4' fontWeight='400' fontSize='18px' color='black' >Discount </Text>
      <Spacer/>
      <Text mr='5' mt='4' fontWeight='400' fontSize='18px' color='green' >- ₹{discount}</Text>
    </Box> */}
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            bg="white"
            borderBottom="1px dashed grey"
          >
            <Text
              ml="5"
              mt="4"
              mb="5"
              fontWeight="400"
              fontSize="18px"
              color="black"
            >
              Delivery Charges
            </Text>
            <Spacer />
            <Text
              mr="5"
              mt="4"
              mb="5"
              fontWeight="400"
              fontSize="18px"
              color="green"
            >
              FREE
            </Text>
          </Box>
          {/* <hr style={{ color:'black'  }} /> */}
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            bg="white"
            borderBottom="1px dashed grey"
          >
            <Text
              ml="5"
              mt="4"
              mb="5"
              fontWeight="500"
              fontSize="19px"
              color="black"
            >
              Total Amount
            </Text>
            <Spacer />
            <Text
              mr="5"
              mt="4"
              mb="5"
              fontWeight="500"
              fontSize="19px"
              color="black"
            >
              ₹ total logic
            </Text>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            bg="white"
          >
            <Text
              ml="5"
              mt="4"
              mb="5"
              fontWeight="500"
              fontSize="14px"
              color="green"
            >
              
              Your Total Savings on this order ₹{"{ }"}
            </Text>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            mt="2"
            alignItems="center"
            shadow="sm"
            bg="white"
          >
            <Image
              w="40%"
              src="https://assets.mspimages.in/wp-content/uploads/2021/01/Flipkart-SuperCoin.png"
            />
            <Box mt="-5" display="grid">
              <Text mt="3" ml="-4" fontWeight="600" fontSize="13px">
                For every 100 spent,
              </Text>
              <br />
              <Text mt="-7" fontWeight="600" fontSize="14px">
                you earn 2 SuperCoins
              </Text>
              <br />
              <Text mt="-7" mb="2" ml="-6" fontSize="13px" color="grey">
                Max 50 coins per order
              </Text>
            </Box>
          </Box>
          <Box
            mt="1"
            p="5"
            display="grid"
            justifyContent="flex-start"
            alignItems="center"
          >
            <MdSecurity fill="grey" />
            <Text
              mt="-5"
              ml="5"
              w="100%"
              textTransform="full-width"
              fontWeight="500"
              fontSize={"xs"}
            >
              
              Safe and Secure Payments.Easy returns.{<br />}100% Authentic
              products.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Checkout;
