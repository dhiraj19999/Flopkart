import React from "react";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useToast,
  Text,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from "@chakra-ui/react";
import UserAvatar from "../../../Components/Navbar/UserAvatar";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnUser } from "../../../redux/usersReducer/users.action";

const UsersInTable = () => {
  const {
    allUsers,
    deleteInitState: { loading },
  } = useSelector((store) => store.allUsersReducers);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDeleteAccount = async (id) => {
    dispatch(deleteAnUser(id))
      .then((res) => {
        toast({
          title: "Successfull.",
          description: "Deleted user from website successfully !",
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

  if (loading) {
    return <Text>Deleting...</Text>;
  }

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>
          Status : Active, user is having account on website
        </TableCaption>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th isNumeric>Contacts</Th>
            <Th>Status</Th>
            <Th>Delete User</Th>
          </Tr>
        </Thead>
        <Tbody>
          {allUsers?.map((user) => (
            <Tr key={user._id}>
              <Td>
                <UserAvatar
                  name={user.firstName + " " + user.lastName}
                  img={user.avatar}
                />
              </Td>
              <Td>{user.firstName + " " + user.lastName}</Td>
              <Td>{user.email}</Td>
              <Td isNumeric>{user.mobile}</Td>
              <Td color="green" fontWeight="bold">
                Active
              </Td>
              <Td color="red" fontWeight="bold" cursor="pointer">
                <CustomAlertDialog fn={handleDeleteAccount} id={user._id} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UsersInTable;

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
              Delete User
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
