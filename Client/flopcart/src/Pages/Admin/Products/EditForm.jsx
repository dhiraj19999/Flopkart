import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";

const intiState = {
  product_url: "",
  product_name: "",
  retail_price: "",
  discounted_price: "",
  image: "",
  brand: "",
  product_specifications: "",
  description: "",
};

function EditForm({ fn, id, actionTitle, modalTitle }) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateProdState } = useSelector((store) => store.adminProdReducers);
  const { loading, error } = updateProdState;

  const openModal = () => {
    onOpen();
  };

  const [formData, setFormData] = useState(intiState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onClose();
    // fitering empty fields
    let changes = {};
    for (let key in formData) {
      if (formData[key] !== "") {
        let val = formData[key];
        if (key === "retail_price" || key === "discounted_price") {
          val = Number(val);
        }
        changes[key] = val;
      }
    }
    setFormData(intiState);
    fn(id, changes);
  };

  if (error) {
    toast({
      title: "Request Failed",
      description: "Can't update product details, try again !",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <>
      <Button variant="solid" size="md" colorScheme="blue" onClick={openModal}>
        {actionTitle}
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent bgColor={"#1a202c"} color="white">
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Edit form */}
            <Flex align={"center"} justify={"center"}>
              <Stack
                spacing={4}
                w={"full"}
                maxW={"md"}
                rounded={"xl"}
                boxShadow={"lg"}
                p={6}
              >
                <FormControl>
                  <FormLabel>Product Url</FormLabel>
                  <Input
                    placeholder="product_url"
                    _placeholder={{ color: "gray.500" }}
                    type="url"
                    name="product_url"
                    value={formData.product_url}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Product Name</FormLabel>
                  <Input
                    placeholder="product_name"
                    _placeholder={{ color: "gray.500" }}
                    type="text"
                    name="product_name"
                    value={formData.product_name}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Retail Price</FormLabel>
                  <Input
                    placeholder="retail_price"
                    _placeholder={{ color: "gray.500" }}
                    type="number"
                    name="retail_price"
                    value={formData.retail_price}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Discounted Price</FormLabel>
                  <Input
                    placeholder="discounted_price"
                    _placeholder={{ color: "gray.500" }}
                    type="number"
                    name="discounted_price"
                    value={formData.discounted_price}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>

                {/* <FormControl>
                  <FormLabel>Image Url</FormLabel>
                  <Input
                    placeholder="image"
                    _placeholder={{ color: "gray.500" }}
                    type="url"
                    name="image"
                    value={formData.image} // it needs to be in array form
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl> */}

                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Input
                    placeholder="description"
                    _placeholder={{ color: "gray.500" }}
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Brand</FormLabel>
                  <Input
                    placeholder="brand"
                    _placeholder={{ color: "gray.500" }}
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Product specifications</FormLabel>
                  <Input
                    placeholder="product_specifications"
                    _placeholder={{ color: "gray.500" }}
                    type="text"
                    name="product_specifications"
                    value={formData.product_specifications}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
              </Stack>
            </Flex>
            {/* ***************** */}
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={loading}
              colorScheme="green"
              mr={3}
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button onClick={onClose} colorScheme="white">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditForm;
