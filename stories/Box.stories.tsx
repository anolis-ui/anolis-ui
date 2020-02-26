import React, { FC } from 'react';

import { Box } from '../src';

export default { title: 'Box' };

export const BasicUsage: FC = () => {
  return (
    <Box>
      <Box background="crimson" color="white" p="10px" my="15px">
        Box 1
      </Box>
      <Box
        background="navy"
        color="white"
        p="10px"
        my="15px"
        _hover={{
          background: { _: 'crimson', md: 'green' }
        }}
      >
        Box 2
      </Box>
    </Box>
  );
};
