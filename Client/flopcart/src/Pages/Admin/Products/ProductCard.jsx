import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  updateProduct,
} from "../../../redux/adminProdReducer/adminProd.action";
import EditForm from "./EditForm";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDeleteProd = (prodID) => {
    dispatch(deleteProduct(prodID))
      .then((res) => {
        toast({
          title: "Successfull.",
          description: "Deleted product from database successfully !",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "Can't delete.",
          description: "Something went wrong !",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const handleUpdateProd = (prodID, changes) => {
    dispatch(updateProduct(prodID, changes))
      .then((res) => {
        toast({
          title: "Successfull.",
          description: "Updated product details in database successfully !",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "Can't delete.",
          description: "Something went wrong !",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={JSON.parse(product.image)[0]}
          m="auto"
          borderRadius="lg"
          height="100px"
        />
        <Stack mt="6" spacing="3">
          <ReadMore
            title={product.product_name}
            description={product.description}
          />
          <Text color="blue.600" fontSize="md">
            Rs. {product.discounted_price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <EditForm
            fn={handleUpdateProd}
            id={product._id}
            actionTitle={"Edit Details"}
            modalTitle={"Update Product Details"}
          />
          <CustomAlertDialog fn={handleDeleteProd} id={product._id} />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

const ReadMore = ({ title, description }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading size="xs">{title}</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{description}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const CustomAlertDialog = ({ fn, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleClick = () => {
    onClose();
    fn(id);
  };

  return (
    <>
      <Button colorScheme="red" variant="ghost" onClick={onOpen}>
        Delete Product
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Product
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleClick} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
