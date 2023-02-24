import { Avatar, AvatarBadge } from "@chakra-ui/react";
import React from "react";

const UserAvatar = ({ name, img }) => {
  return (
    <Avatar
      size="sm"
      name={name} // user name if img breaks
      src={img} // user img
      bgColor="#fff"
    >
      <AvatarBadge boxSize="1em" bg="green.500" />
    </Avatar>
  );
};

export default UserAvatar;
