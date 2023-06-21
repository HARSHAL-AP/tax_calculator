import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from '@chakra-ui/react';

const Cooperative = () => {
  const [totalIncome, setTotalIncome] = useState('');
  const [deductions, setDeductions] = useState('');
  const [relief, setRelief] = useState('');
  const [tdsTcsMatCredit, setTdsTcsMatCredit] = useState('');
  const [taxableIncome, setTaxableIncome] = useState('');
  const [surcharge, setSurcharge] = useState('');
  const [healthAndEducationCess, setHealthAndEducationCess] = useState('');
  const [totalTaxLiability, setTotalTaxLiability] = useState('');
  const [advanceTax, setAdvanceTax] = useState('');
  const [isSection115BADOpted, setIsSection115BADOpted] = useState(false);
  const [isSection115BAEOpted, setIsSection115BAEOpted] = useState(false);

  const handleCalculate = () => {
   
    const calculatedTaxableIncome =
      parseInt(totalIncome) -
      parseInt(deductions) -
      parseInt(relief) -
      parseInt(tdsTcsMatCredit);
    const calculatedSurcharge =
      calculatedTaxableIncome > 10000000 ? calculatedTaxableIncome * 0.12 : 0;
    const calculatedHealthAndEducationCess = calculatedTaxableIncome * 0.04;
    const calculatedTotalTaxLiability =
      calculatedTaxableIncome + calculatedSurcharge + calculatedHealthAndEducationCess;
    const calculatedAdvanceTax = calculatedTotalTaxLiability * 0.3;

    
    setTaxableIncome(calculatedTaxableIncome.toString());
    setSurcharge(calculatedSurcharge.toString());
    setHealthAndEducationCess(calculatedHealthAndEducationCess.toString());
    setTotalTaxLiability(calculatedTotalTaxLiability.toString());
    setAdvanceTax(calculatedAdvanceTax.toString());
  };

  const handleReset = () => {
   
    setTotalIncome('');
    setDeductions('');
    setRelief('');
    setTdsTcsMatCredit('');
    setTaxableIncome('');
    setSurcharge('');
    setHealthAndEducationCess('');
    setTotalTaxLiability('');
    setAdvanceTax('');
    setIsSection115BADOpted(false);
    setIsSection115BAEOpted(false);
  };

  return (
    <Box p={4}>


      <VStack spacing={4} align="start">
        <FormControl>
          <FormLabel>Total Income:</FormLabel>
          <Input
            type="number"
            value={totalIncome}
            onChange={(e) => setTotalIncome(e.target.value)}
            
          />
        </FormControl>

        <FormControl>
          <FormLabel>Deductions:</FormLabel>
          <Input
            type="number"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Relief:</FormLabel>
          <Input
            type="number"
            value={relief}
            onChange={(e) => setRelief(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>TDS/TCS/MAT Credit Utilized:</FormLabel>
          <Input
            type="number"
            value={tdsTcsMatCredit}
            onChange={(e) => setTdsTcsMatCredit(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Taxable Income:</FormLabel>
          <Input type="number" value={taxableIncome} isReadOnly variant='filled'/>
        </FormControl>

        <FormControl>
          <FormLabel>Surcharge:</FormLabel>
          <Input type="number" value={surcharge} isReadOnly variant='filled'/>
        </FormControl>

        <FormControl>
          <FormLabel>Health and Education Cess:</FormLabel>
          <Input type="number" value={healthAndEducationCess} isReadOnly variant='filled'/>
        </FormControl>

        <FormControl>
          <FormLabel>Total Tax Liability:</FormLabel>
          <Input type="number" value={totalTaxLiability} isReadOnly variant='filled'/>
        </FormControl>

        <FormControl>
          <FormLabel>Advance Tax:</FormLabel>
          <Input type="number" value={advanceTax} isReadOnly variant='filled'/>
        </FormControl>

        <FormControl>
          <FormLabel>
            Co-operative society opted and qualifies for section 115BAD:
          </FormLabel>
          <Select
            value={isSection115BADOpted.toString()}
            onChange={(e) => setIsSection115BADOpted(e.target.value === 'true')}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>
            Co-operative society opted and qualifies for section 115BAE:
          </FormLabel>
          <Select
            value={isSection115BAEOpted.toString()}
            onChange={(e) => setIsSection115BAEOpted(e.target.value === 'true')}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </Select>
        </FormControl>

        <Button colorScheme="messenger" onClick={handleCalculate}>
          Calculate
        </Button>

        <Button colorScheme="red" onClick={handleReset}>
          Reset
        </Button>
      </VStack>
    </Box>
  );
};

export default Cooperative;
