import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  chakra,
  Text,
  Flex,
} from "@chakra-ui/react";
import IncomeComponent from "../Components/IncomeComponent";
import ShortTermCapitalGains from "../Components/ShortTermCapitalGains";
import Cooprative from "../Components/Cooperative";
import Llp from "../Components/Llp";
import Firm from "../Components/Firm";
import Domestic from "../Components/Domestic";
import Foreign from "../Components/Foreign";
import Huf from "../Components/Huf";
import { Individual } from "../Components/Individual";
import Aops from "../Components/Aops";

const AdvanceTaxCalculator = () => {
  const [taxpayerType, setTaxpayerType] = useState("");

  return (
    <Box p={4} maxW="50%" mx="auto" border="1px solid" borderColor="blue.400" mt="20" mb="40">
      <chakra.h1 fontSize="xl" mb={4} textAlign="center">
        <Text as="b" color="blue.900">
          Advance Tax Calculator - Financial Year 2023-2024
        </Text>
      </chakra.h1>

      <Box mb={4} bgColor="green.100">
        <Flex justifyContent="space-between" alignItems="center" mb={4} p="2">
          <Box>
            {" "}
            <FormLabel fontSize="l">Taxpayer Type:</FormLabel>
          </Box>
          <Box>
            <Select
              value={taxpayerType}
              onChange={(e) => setTaxpayerType(e.target.value)}
              bg="white"
              size="sm"
              p="0.5"
            >
              <option value="">-- Select Taxpayer Type --</option>
              <option value="Individual">Individual</option>
              <option value="HUF">HUF</option>
              <option value="APOs/BPI">APOs/BPI</option>
              <option value="Domestic Company">Domestic Company</option>
              <option value="Foreign Company">Foreign Company</option>
              <option value="Firms">Firms</option>
              <option value="LLP">LLP</option>
              <option value="Co-operative society">Co-operative society</option>
            </Select>
          </Box>
        </Flex>
      </Box>

      <Box >
      {taxpayerType === "" && <Individual />}
        {taxpayerType === "Individual" && <Individual />}
        {taxpayerType === "HUF" && <Huf />}
        {taxpayerType === "APOs/BPI" && <Aops />}
        {taxpayerType === "Domestic Company" && <Domestic />}
        {taxpayerType === "Foreign Company" && <Foreign />}
        {taxpayerType === "Firms" && <Firm />}
        {taxpayerType === "LLP" && <Llp />}
        {taxpayerType === "Co-operative society" && <Cooprative />}
      </Box>
    </Box>
  );
};
export default AdvanceTaxCalculator;
