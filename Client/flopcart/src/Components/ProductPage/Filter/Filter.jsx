import React from "react";
import styles from "./Filter.module.css";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  Image,
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
                  <Text fontSize={"sm"} fontWeight="500">
                    DISCOUNT
                  </Text>
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
                  <Text fontSize={"sm"} fontWeight="500">
                    AVAILABILITY
                  </Text>
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
      <Checkbox margin={""} pb="2" pt="2" pl="4">
        <Image
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
          width={"40%"}
        />
      </Checkbox>
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
                  <Text fontSize={"sm"} fontWeight="500">
                    GST INVOICE AVALIABLE
                  </Text>
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
                  <Text fontSize={"sm"} fontWeight="500">
                    CUSTOMER RATINGS
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div className={styles.filters}>
                  <Checkbox>4★ & above</Checkbox>
                  <Checkbox>3★ & above</Checkbox>
                  <Checkbox>2★ & above</Checkbox>
                  <Checkbox>1★ & above</Checkbox>
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
                  <Text fontSize={"sm"} fontWeight="500">
                    OFFERS
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div className={styles.filters}>
                  <Checkbox>Buy More, Save More</Checkbox>
                  <Checkbox>Special Price</Checkbox>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
};
