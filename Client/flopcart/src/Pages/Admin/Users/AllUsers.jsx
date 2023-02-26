import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/usersReducer/users.action";
import { Center, Flex, useColorModeValue } from "@chakra-ui/react";
import BasicStatistics from "./BasicStatistics";
import UsersInTable from "./UsersInTable";

const AllUsers = () => {
  const { loading, error } = useSelector((store) => store.allUsersReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      flexDir="column"
      bg={useColorModeValue("gray.50", "gray.800")}
      rowGap="20px"
    >
      <Center>
        <BasicStatistics />
      </Center>
      <Center>{loading ? "Loading..." : <UsersInTable />}</Center>
      {error ? "Error : Something went wrong..." : null}
    </Flex>
  );
};

export default AllUsers;
