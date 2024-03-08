// File: my-monorepo/common/components/HelloMessage.tsx

import React from 'react';
import { Text } from 'react-native';

interface GreetingProps {
  name: string;
  target: 'web' | 'mobile';
}

const Greeting: React.FC<GreetingProps> = ({ name, target }) => {
  const content = target === 'web' ? <p>Namaste! Common code {name}</p> : <Text>Hey Common code {name}</Text>;

  return <>{content}</>;
};

export default Greeting;
