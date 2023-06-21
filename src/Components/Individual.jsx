import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  chakra,
  Text,Flex
} from '@chakra-ui/react';
import IncomeComponent from './IncomeComponent';
import ShortTermCapitalGains from './ShortTermCapitalGains';

export const Individual = () => {
    const [totalIncome, setTotalIncome] = useState('');
  const [taxpayerType, setTaxpayerType] = useState('');
  const [incomeFromSalary, setIncomeFromSalary] = useState('');
  const [profitsAndGains, setProfitsAndGains] = useState('');
  const [agriculturalIncome, setAgriculturalIncome] = useState('');
  const [relief, setRelief] = useState('');
  const [tdsCredit, setTdsCredit] = useState('');
  const [opting115BAC, setOpting115BAC] = useState('');
  const [gender, setGender] = useState('');
  const [residentialStatus, setResidentialStatus] = useState('');
  const [advanceTax, setAdvanceTax] = useState('');


  const calculateAdvanceTax = () => {
   
    let calculatedAdvanceTax = 0;

 
    
      const taxableIncome =
        Number(incomeFromSalary) +
        Number(profitsAndGains) +
        Number(agriculturalIncome) -
        Number(relief) -
        Number(tdsCredit);

      calculatedAdvanceTax = taxableIncome * 0.2;
   
    setAdvanceTax(calculatedAdvanceTax);
  };
  return (
    <div>
        <Box mb={4}>
        <FormControl>
          <FormLabel>Total Income:</FormLabel>
          <Input
            type="number"
            value={totalIncome}
            onChange={(e) => setTotalIncome(e.target.value)}
          />
        </FormControl>
      </Box>
      <Box mb={4}>
            <FormControl>
              <FormLabel>Income from Salary:</FormLabel>
              <Input
                type="number"
                value={incomeFromSalary}
                onChange={(e) => setIncomeFromSalary(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl>
              <FormLabel>Profits and Gains of Business or Profession:</FormLabel>
              <Input
                type="number"
                value={profitsAndGains}
                onChange={(e) => setProfitsAndGains(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl>
              <FormLabel>Agricultural Income:</FormLabel>
              <Input
                type="number"
                value={agriculturalIncome}
                onChange={(e) => setAgriculturalIncome(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl>
              <FormLabel>Relief other than relief u/s 87A:</FormLabel>
              <Input
                type="number"
                value={relief}
                onChange={(e) => setRelief(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl>
              <FormLabel>TDS/TCS/MAT (AMT) Credit Utilized:</FormLabel>
              <Input
                type="number"
                value={tdsCredit}
                onChange={(e) => setTdsCredit(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl>
              <FormLabel>Whether opting for taxation under Section 115BAC?</FormLabel>
              <Select value={opting115BAC} onChange={(e) => setOpting115BAC(e.target.value)}>
                <option value="">-- Select Option --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Select>
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl>
              <FormLabel>Male / Female / Senior Citizen:</FormLabel>
              <Select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Senior Citizen">Senior Citizen</option>
              </Select>
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl>
              <FormLabel>Residential Status:</FormLabel>
              <Select
                value={residentialStatus}
                onChange={(e) => setResidentialStatus(e.target.value)}
              >
                <option value="">-- Select Residential Status --</option>
                <option value="Resident">Resident</option>
                <option value="Non-Resident">Non-Resident</option>
                <option value="NRI">NRI</option>
              </Select>
            </FormControl>
          </Box>
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Box>
            <FormLabel>Assessed Tax</FormLabel>
          </Box>
          <Box>
            <Input value={advanceTax}  isReadOnly variant='filled'/>
          </Box>
        </Flex>
       

      <Button colorScheme="messenger" onClick={calculateAdvanceTax} mb={4}>
        Calculate Advance Tax
      </Button>
      {advanceTax && (
        <Text as="p" fontWeight="bold">
          Advance Tax: {advanceTax}
        </Text>
      )}
   
    </div>
  )
}
