import React, { useState } from 'react';
import { Box, Text, FormControl, FormLabel, Input } from '@chakra-ui/react';

const ShortTermCapitalGains = () => {
  const [values, setValues] = useState({
    period1: '',
    period2: '',
    period3: '',
    period4: '',
    period5: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const calculateTotal = () => {
    const { period1, period2, period3, period4, period5 } = values;
    const total =
      parseInt(period1 || 0) +
      parseInt(period2 || 0) +
      parseInt(period3 || 0) +
      parseInt(period4 || 0) +
      parseInt(period5 || 0);
    return total || 0;
  };

  return (
    <Box>
      <Text as="h2" mb={4}>
        Short Term Capital Gains (Other than covered under section 111A)
      </Text>
      <FormControl>
        <FormLabel htmlFor="period1">From 01/04/2023 to 15/06/2023</FormLabel>
        <Input
          type="number"
          id="period1"
          name="period1"
          value={values.period1}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="period2">From 16/06/2023 to 15/09/2023</FormLabel>
        <Input
          type="number"
          id="period2"
          name="period2"
          value={values.period2}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="period3">From 16/09/2023 to 15/12/2023</FormLabel>
        <Input
          type="number"
          id="period3"
          name="period3"
          value={values.period3}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="period4">From 16/12/2023 to 15/03/2024</FormLabel>
        <Input
          type="number"
          id="period4"
          name="period4"
          value={values.period4}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="period5">From 16/03/2023 to 31/03/2024</FormLabel>
        <Input
          type="number"
          id="period5"
          name="period5"
          value={values.period5}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="total">Total</FormLabel>
        <Input
          type="number"
          id="total"
          name="total"
          value={calculateTotal()}
          disabled
        />
      </FormControl>
    </Box>
  );
};

export default ShortTermCapitalGains;