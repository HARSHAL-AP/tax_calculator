import React, { useState } from 'react';
import { Box, Text, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const IncomeComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [interest, setInterest] = useState("");
  const [income, setIncome] = useState("");
  const [rentValue, setRentValue] = useState("");
  const [utilizedRent, setUtilizedRent] = useState("");
  const [loanInterest, setLoanInterest] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const calculateValues = () => {
    const netAnnualValue = parseFloat(rentValue) - parseFloat(utilizedRent);
    const standardDeduction = 0.3 * netAnnualValue;
    const incomeFromLetOutProperty = parseFloat(income) - standardDeduction;

    return {
      netAnnualValue: netAnnualValue.toFixed(2),
      standardDeduction: standardDeduction.toFixed(2),
      incomeFromLetOutProperty: incomeFromLetOutProperty.toFixed(2),
    };
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "interest") {
      setInterest(value);
    } else if (name === "income") {
      setIncome(value);
    } else if (name === "rentValue") {
      setRentValue(value);
    } else if (name === "utilizedRent") {
      setUtilizedRent(value);
    } else if (name === "loanInterest") {
      setLoanInterest(value);
    }
  };

  const { netAnnualValue, standardDeduction, incomeFromLetOutProperty } = calculateValues();

  return (
    <Box>
      <Text as="label" htmlFor="selfOccupiedProperty">
        Income From Self Occupied Property
      </Text>
      <Input id="selfOccupiedProperty" type="text" disabled value={incomeFromLetOutProperty} />
      <Button onClick={toggleDropdown}>Toggle Dropdown</Button>
      {isDropdownOpen && (
        <Box>
          <FormControl>
            <FormLabel htmlFor="interest">Interest on Housing Loan</FormLabel>
            <Input
              id="interest"
              type="text"
              name="interest"
              value={interest}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="income">Income from Self-Occupied House Property</FormLabel>
            <Input
              id="income"
              type="text"
              name="income"
              value={income}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="rentValue">Annual Latable Value/Rent Paid during the Year</FormLabel>
            <Input
              id="rentValue"
              type="text"
              name="rentValue"
              value={rentValue}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="utilizedRent">Less Utilized Rent</FormLabel>
            <Input
              id="utilizedRent"
              type="text"
              name="utilizedRent"
              value={utilizedRent}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="netAnnualValue">Net Annual Value</FormLabel>
            <Input id="netAnnualValue" type="text" disabled value={netAnnualValue} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="standardDeduction">Standard Ded

uction @30% of Net Annual Value</FormLabel>
            <Input id="standardDeduction" type="text" disabled value={standardDeduction} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="loanInterest">Interest on Housing Loan</FormLabel>
            <Input
              id="loanInterest"
              type="text"
              name="loanInterest"
              value={loanInterest}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="incomeFromLetOutProperty">Income from Let-Out House Property</FormLabel>
            <Input
              id="incomeFromLetOutProperty"
              type="text"
              disabled
              value={incomeFromLetOutProperty}
            />
          </FormControl>
        </Box>
      )}
    </Box>
  );
};

export default IncomeComponent;