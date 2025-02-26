import React from 'react';
import { View, Text } from 'react-native';

const TestComponent = () => {
  return (
    <View className="bg-red-500 p-4 rounded-md">
      <Text className="text-white font-bold">
        ¿Se ven los estilos de Tailwind?
      </Text>
    </View>
  );
};

export default TestComponent;
