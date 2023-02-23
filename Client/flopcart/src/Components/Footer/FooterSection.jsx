import { Stack, Text, Link } from "@chakra-ui/react";

const FooterSections = ({ footer }) => {
  return footer?.map((section) => (
    <Stack key={section.text} align={"flex-start"}>
      <ListHeader>{section.text}</ListHeader>
      {section?.subText.map((el) => (
        <Link key={el} href={section.link}>
          {el}
        </Link>
      ))}
    </Stack>
  ));
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"md"} mb={2} color="#878787">
      {children}
    </Text>
  );
};

export default FooterSections;
