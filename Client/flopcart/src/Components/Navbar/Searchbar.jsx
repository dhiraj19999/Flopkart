import { CgSearch } from "react-icons/cg";

import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";

const Searchbar = () => {
  const [searchVal, setSearchVal] = useState("");

  const handleOnChange = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSubmit = () => {
    console.log(searchVal);
  };

  return (
    <InputGroup size="md" bgColor="white">
      <Input
        borderRadius="none"
        placeholder="Search for products, brands and more"
        value={searchVal}
        onChange={(e) => handleOnChange(e)}
      />
      <InputRightElement cursor="pointer" onClick={handleSubmit}>
        <CgSearch size="25" color="#2874f0" />
      </InputRightElement>
    </InputGroup>
  );
};

export default Searchbar;
