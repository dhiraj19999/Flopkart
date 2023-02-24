import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  RadioGroup,
  Radio,
  Text,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { loadData, saveData } from "../../utils/accessLocalstorage";

const initState = {
  firstName: loadData("firstName") || "NA",
  lastName: loadData("lastName") || "NA",
  email: loadData("email") || "NA",
  gender: loadData("gender") || "NA",
  mobile: loadData("mobile") || "NA",
  // password: loadData("password") || "aniket",
  avatar:
    loadData("avatar") ||
    "https://avatars.githubusercontent.com/u/107461782?v=4",
};

const UserProfileEdit = () => {
  const [isEditable, setEditable] = useState(true);
  const [formData, setFormData] = useState(initState);
  // const [updated, setUpdated] = useState(false);

  // useEffect(() => {
  //   console.log("loading page");
  // }, [updated]);

  const handleEtidalble = () => {
    setEditable((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    let ID = loadData("_id");

    let payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      gender: formData.gender,
      mobile: formData.mobile,
    };

    // console.log(ID, payload);

    fetch("https://drab-pants-bass.cyclic.app/user/update/" + ID, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        getUpdatedUserData(ID);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUpdatedUserData = async (userID) => {
    // setUpdated(true);
    fetch("https://drab-pants-bass.cyclic.app/user/all-users/" + userID, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        saveData("firstName", res.data[0].firstName);
        saveData("lastName", res.data[0].lastName);
        saveData("email", res.data[0].email);
        saveData("gender", res.data[0].gender);
        saveData("mobile", res.data[0].mobile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            User Profile Edit
          </Heading>
          <Text color="blue.500" cursor={"pointer"} onClick={handleEtidalble}>
            EDIT
          </Text>
        </Flex>

        <FormControl id="userName">
          {/* Image */}
          <FormLabel>User Icon</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" src={formData.avatar}>
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Change Icon</Button>
              {/* <Input
            placeholder="password"
            _placeholder={{ color: "gray.500" }}
            type="password"
            value={formData.password}
            onChange={(e) => handleOnChange(e)}
          /> */}
            </Center>
          </Stack>
        </FormControl>

        {/* Details */}
        <FormControl isDisabled={isEditable}>
          <FormLabel>First name</FormLabel>
          <Input
            placeholder="first name"
            name="firstName"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={formData.firstName}
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>

        <FormControl isDisabled={isEditable}>
          <FormLabel>Last name</FormLabel>
          <Input
            placeholder="last name"
            name="lasstName"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={formData.lastName}
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>

        <FormControl isDisabled={isEditable}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="gender"
            onChange={(e) => handleOnChange(e)}
            value={formData.gender}
          >
            <Stack direction="row">
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
              <Radio value="Others">Others</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl isDisabled={isEditable}>
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
            value={formData.email}
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>

        <FormControl isDisabled={isEditable}>
          <FormLabel>Mobile</FormLabel>
          <Input
            name="mobile"
            placeholder="mobile"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={formData.mobile}
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>
        {/* <FormControl isDisabled={isEditable}>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: "gray.500" }}
            type="password"
            value={formData.password}
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl> */}

        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
            onClick={handleUpdate}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default UserProfileEdit;
