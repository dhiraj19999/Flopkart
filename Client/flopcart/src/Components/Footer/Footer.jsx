import payments from "../assets/flipkart_payments_footer.svg";
import seller from "../assets/become_a_seller_footer.svg";
import advertise from "../assets/advertise_footer.svg";
import gifts from "../assets/gift_cards_footer.svg";
import help from "../assets/help_center_footer.svg";
import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";

import FooterSections from "./FooterSection";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Box
      bg={useColorModeValue("#172337", "gray.900")}
      color={useColorModeValue("#f0f0f0", "gray.200")}
      fontSize="12px"
      ml={pathname === "/myprofile" ? { base: 0, md: 60 } : 0} // for myprofile page left margin is 60 else 0
    >
      <Container as={Stack} maxW={"8xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 3, md: 4, lg: 6 }} spacing={5}>
          {/* mapping all footer sections */}
          <FooterSections footer={footer} />
        </SimpleGrid>
      </Container>

      {/* Ribbon of footer */}
      <Box
        borderTopWidth={"1px"}
        borderStyle={"solid"}
        borderColor={useColorModeValue("#454d5e", "gray.700")}
      >
        <Container
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          align={{ md: "center" }}
        >
          <Flex
            flexWrap="wrap"
            rowGap="20px"
            justifyContent="space-between"
            fontSize="14px"
          >
            {/* Mapping all items at las ribbon of footer */}
            {footerRibbonItems?.map((item) => (
              <Flex key={item.text} gap="5px">
                <Image src={item.img} />
                <Text>{item.text}</Text>
              </Flex>
            ))}

            <Text>©2007-2023 Flipkart.com</Text>
            <Image src={payments} />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;

const footerRibbonItems = [
  { img: seller, text: "Become a Seller" },
  { img: advertise, text: "Adveritse" },
  { img: gifts, text: "Gift Cards" },
  { img: help, text: "Help Center" },
];

const footer = [
  {
    text: "About",
    subText: [
      "Contact Us",
      "About Us",
      "Careers",
      "Flipkart Stories",
      "Press",
      "Flipkart Wholesale",
      "Corporate Information",
    ],
    link: "#",
  },
  {
    text: "Help",
    subText: [
      "Payments",
      "Shipping",
      "Community Guidelines",
      "FAQ",
      "Report Infringement",
    ],
    link: "#",
  },
  {
    text: "Policy",
    subText: ["Return Policy", "Terms of Use", "Security", "EPR Compliance"],
    link: "#",
  },
  { text: "Social", subText: ["Facebook", "Twitter", "Youtube"], link: "#" },
  {
    text: "Mail Us:",
    subText: [
      "Flipkart Internet Private Limited,",
      "Buildings Alyssa, Begonia &",
      "Clove Embassy Tech Village,",
      "Outer Ring Road, Devarabeesanahalli Village,",
      "Bengaluru, 560103,",
      "Karnataka, India",
    ],
    link: "#",
  },
  {
    text: "Registered Office Address",
    subText: [
      "Flipkart Internet Private Limited,",
      "Buildings Alyssa, Begonia &",
      "Clove Embassy Tech Village,",
      "Outer Ring Road, Devarabeesanahalli Village,",
      "Bengaluru, 560103,",
      "Karnataka, India",
      "CIN : U51109KA2012PTC066107",
      "Telephone : 044-45614700",
    ],
    link: "#",
  },
];
