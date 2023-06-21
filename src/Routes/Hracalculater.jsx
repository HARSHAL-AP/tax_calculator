import React, { useState } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  chakra,
  Text,
} from '@chakra-ui/react';

const HraCalculator = () => {
  const [formValues, setFormValues] = useState({
    basicSalary: '',
    daSalary: '',
    commission: '',
    hraReceived: '',
    rentPaid: '',
    isMetroCity: false,
  });

  const [exemptedHra, setExemptedHra] = useState('');
  const [taxableHra, setTaxableHra] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };

  const calculateHra = () => {
   
    const {
      basicSalary,
      daSalary,
      commission,
      hraReceived,
      rentPaid,
      isMetroCity,
    } = formValues;

    
    const calculatedExemptedHra = Math.min(
      0.5 * basicSalary,
      rentPaid - 0.1 * (basicSalary + daSalary),
      hraReceived
    );

    const calculatedTaxableHra = hraReceived - calculatedExemptedHra;

    setExemptedHra(calculatedExemptedHra);
    setTaxableHra(calculatedTaxableHra);
  };

  const resetForm = () => {
    setFormValues({
      basicSalary: '',
      daSalary: '',
      commission: '',
      hraReceived: '',
      rentPaid: '',
      isMetroCity: false,
    });
    setExemptedHra('');
    setTaxableHra('');
  };

  return (
    <Box p={4} maxW="50%" mx="auto" border="1px solid" borderColor="blue.400" mt="20">
      <chakra.h1 fontSize="xl" mb={4} textAlign="center">
        <Text as="b">HRA Calculator</Text>
      </chakra.h1>
      <Box mb={4}>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Box>
            <FormLabel>Basic Salary:</FormLabel>
          </Box>
          <Box>
            <Input
              type="number"
              name="basicSalary"
              value={formValues.basicSalary}
              onChange={handleInputChange}
            />
          </Box>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Box>
            <FormLabel>DA forming part of salary:</FormLabel>
          </Box>
          <Box>
            <Input
              type="number"
              name="daSalary"
              value={formValues.daSalary}
              onChange={handleInputChange}
            />
          </Box>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Box>
            <FormLabel>Commission (as % of turnover achieved by the employee):</FormLabel>
          </Box>
          <Box>
            <Input
              type="number"
              name="commission"
              value={formValues.commission}
              onChange={handleInputChange}
            />
          </Box>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Box>
            <FormLabel>HRA received:</FormLabel>
          </Box>
          <Box>
            <Input
              type="number"
              name="hraReceived"
              value={formValues.hraReceived}
              onChange={handleInputChange}
            />
          </Box>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Box>
            <FormLabel>Rent Paid:</FormLabel>
          </Box>
          <Box>
            <Input
              type="number"
              name="rentPaid"
              value={formValues.rentPaid}
              onChange={handleInputChange}
            />
          </Box>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Checkbox
            name="isMetroCity"
            isChecked={formValues.isMetroCity}
            onChange={handleInputChange}
          >
            Residing in metro city
          </Checkbox>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Box>
            <FormLabel>Exempted House Rent Allowance</FormLabel>
          </Box>
          <Box>
            <Input value={exemptedHra=>0?0:exemptedHra}  isReadOnly variant='filled'/>
          </Box>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Box>
            <FormLabel>Taxable House Rent Allowance</FormLabel>
          </Box>
          <Box>
            <Input value={taxableHra}  isReadOnly variant='filled'/>
          </Box>
        </Flex>
      </Box>
      <Flex justifyContent="center" alignItems="center" mb={4}>
        <Button colorScheme="messenger" onClick={resetForm} mr={2}>
          Reset
        </Button>
        <Button colorScheme="messenger" onClick={calculateHra}>
          Calculate HRA
        </Button>
      </Flex>
    </Box>
  );
};

export default HraCalculator;
