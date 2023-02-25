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
  Center,
  RadioGroup,
  Radio,
  Text,
} from "@chakra-ui/react";
import { loadData, saveData } from "../../utils/accessLocalstorage";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const initState = {
  firstName: loadData("firstName") || "NA",
  lastName: loadData("lastName") || "NA",
  email: loadData("email") || "NA",
  gender: loadData("gender") || "NA",
  mobile: loadData("mobile") || "NA",
  avatar: loadData("avatar"),
};

const UserProfileEdit = () => {
  const { isLoggedIn } = useSelector((store) => store.authReducer);
  const [isEditable, setEditable] = useState(false);
  const [formData, setFormData] = useState(initState);
  const [imgSelected, setImgSelected] = useState("");
  const [iconBtnLoading, setIconBtnLoading] = useState(false);
  const [submitBtnLoading, setSubmitBtnLoading] = useState(false);

  const handleEtidalble = () => {
    if (isLoggedIn === false) {
      alert("Invalid request");
      return;
    }
    setEditable((prev) => !prev);
  };

  const uploadImage = () => {
    const formImgData = new FormData();
    formImgData.append("file", imgSelected);
    formImgData.append("upload_preset", "ao8hjn9o");
    setIconBtnLoading(true);
    axios
      .post(
        "https://api.cloudinary.com/v1_1/dgwuo2wpw/image/upload",
        formImgData
      )
      .then((res) => {
        setIconBtnLoading(false);
        console.log(res);
        formData.avatar = res.data.url;
      })
      .catch((err) => {
        setIconBtnLoading(false);
        console.log(err);
      });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    setSubmitBtnLoading(true);
    let ID = loadData("_id");
    let payload = {
      avatar: formData.avatar,
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
        setSubmitBtnLoading(false);
        getUpdatedUserData(ID);
      })
      .catch((err) => {
        setSubmitBtnLoading(false);
        console.log(err);
      });
  };

  const getUpdatedUserData = async (userID) => {
    fetch("https://drab-pants-bass.cyclic.app/user/all-users/" + userID, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        saveData("firstName", res.data[0].firstName);
        saveData("lastName", res.data[0].lastName);
        saveData("email", res.data[0].email);
        saveData("gender", res.data[0].gender);
        saveData("mobile", res.data[0].mobile);
        saveData("avatar", res.data[0].avatar);
        window.location.reload();
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
              <Avatar size="xl" src={formData.avatar} />
            </Center>
            <Center w="full">
              <Flex direction="column" gap="2px">
                {/* Input is not visible when not editing */}
                <Input
                  display={isEditable === true ? "block" : "none"}
                  p="0"
                  h="auto"
                  name="avatar"
                  placeholder="Choose"
                  _placeholder={{ color: "gray.500" }}
                  type="file"
                  onChange={(e) => setImgSelected(e.target.files[0])}
                />
                <Button
                  isLoading={iconBtnLoading}
                  isDisabled={isEditable === false}
                  w="full"
                  colorScheme="blue"
                  onClick={uploadImage}
                >
                  Change Icon
                </Button>
              </Flex>
            </Center>
          </Stack>
        </FormControl>

        {/* Details */}
        <FormControl isDisabled={isEditable === false}>
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

        <FormControl isDisabled={isEditable === false}>
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

        <FormControl isDisabled={isEditable === false}>
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

        <FormControl isDisabled={isEditable === false}>
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

        <FormControl isDisabled={isEditable === false}>
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

        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            isDisabled={isEditable === false}
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
            isLoading={submitBtnLoading}
            isDisabled={isEditable === false}
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
