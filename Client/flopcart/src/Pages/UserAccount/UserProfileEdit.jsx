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
import { useState } from "react";

const initState = {
  firstName: "Aniket",
  lastName: "Pandey",
  email: "aniket@gmail.com",
  gender: "Male",
  mobile: "9956470719",
  password: "aniket",
  avatar: "https://avatars.githubusercontent.com/u/107461782?v=4",
};

const UserProfileEdit = () => {
  const [isEditable, setEditable] = useState(true);
  const [formData, setFormData] = useState(initState);

  const handleEtidalble = () => {
    setEditable((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        <FormControl id="userName" isDisabled={isEditable}>
          <FormLabel>First name</FormLabel>
          <Input
            placeholder="first name"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={formData.firstName}
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>

        <FormControl id="userName" isDisabled={isEditable}>
          <FormLabel>Last name</FormLabel>
          <Input
            placeholder="last name"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={formData.lastName}
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>

        <FormControl id="userName" isDisabled={isEditable}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
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

        <FormControl id="email" isDisabled={isEditable}>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
            value={formData.email}
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>

        <FormControl id="password" isDisabled={isEditable}>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: "gray.500" }}
            type="password"
            value={formData.password}
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>

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
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default UserProfileEdit;
