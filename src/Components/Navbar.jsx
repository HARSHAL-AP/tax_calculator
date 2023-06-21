import React, { useState } from 'react';
import { Box, Flex, IconButton, Link ,Text,chakra} from '@chakra-ui/react';


export const Navbar = () => {
  

  return (
    <Box width="100%" m="auto" px={3} borderBottom="2px solid " borderColor='gray.300' >
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <chakra.h1  fontSize="xl"  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'

  fontWeight='extrabold'>
      TAX CALCULATOR
      </chakra.h1>
      <Flex>
        <Link mr={4} href="/" textDecoration="none">
         <Text as='b'> HRA Calculator </Text>
        </Link>
        
        <Link href="/advancecal"><Text as='b'>Calculate Advance Tax</Text></Link>
      </Flex>
    </Flex>
  </Box>
  );
};


