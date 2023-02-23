import { Menu, MenuButton, MenuItem, MenuList, Icon } from "@chakra-ui/react";

import { BiChevronDown } from "react-icons/bi";

const DropDownMenu = ({ menuList, menuName }) => {
  return (
    <Menu>
      <MenuButton>{menuName}</MenuButton>
      <MenuList color="black">
        {menuList?.map((el) => (
          <MenuItem
            key={el.text}
            icon={
              <Icon
                key={el.text}
                as={el.icon}
                mt="6px"
                fontSize="16px"
                color="#2874f0"
              />
            }
          >
            {el.text}
          </MenuItem>
        ))}
      </MenuList>
      <Icon as={BiChevronDown} fontSize="20" />
    </Menu>
  );
};

export default DropDownMenu;
