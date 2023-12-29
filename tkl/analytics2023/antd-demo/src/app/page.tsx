import React from 'react';
import { ConfigProvider, Flex } from 'antd';

import theme from '@/theme';

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <Flex>filters</Flex>
    <Flex>content</Flex>
  </ConfigProvider>
);

export default HomePage;
