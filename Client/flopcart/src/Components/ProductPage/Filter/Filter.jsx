import React from "react";
import styles from "./Filter.module.css";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  Text,
  VStack,
} from "@chakra-ui/react";
export const Filter = () => {
  return (
    <div className={styles.filercomp}>
      <Text
        fontSize={"xl"}
        fontWeight="500"
        marginLeft={"20px"}
        marginTop={"10px"}
        marginBottom="10px"
      >
        Filters
      </Text>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        //   border={"none"}
        border="1px solid #E5E4E2"
      >
        <AccordionItem border={"none"}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  display="flex"
                  justifyContent={"space-between"}
                  _hover={{ background: "#fff" }}
                >
                  <Text fontSize={"l"}>Discount</Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div className={styles.filters}>
                  <Checkbox>50% or more</Checkbox>
                  <Checkbox>40% or more</Checkbox>
                  <Checkbox>30% or more</Checkbox>
                  <Checkbox>20% or more</Checkbox>
                  <Checkbox>10% or more</Checkbox>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        //   border={"none"}
        border="1px solid #E5E4E2"
      >
        <AccordionItem border={"none"}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  display="flex"
                  justifyContent={"space-between"}
                  _hover={{ background: "#fff" }}
                >
                  <Text fontSize={"l"}>AVAILABILITY</Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div className={styles.filters}>
                  <Checkbox>Include Out of Stock</Checkbox>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        //   border={"none"}
        border="1px solid #E5E4E2"
      >
        <AccordionItem border={"none"}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  display="flex"
                  justifyContent={"space-between"}
                  _hover={{ background: "#fff" }}
                >
                  <Text fontSize={"l"}>GST INVOICE AVALIABLE</Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div className={styles.filters}>
                  <Checkbox>GST Invoice Available</Checkbox>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
};
