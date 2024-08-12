import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MealDetailsScreen = ({ route }) => {
  console.log({ route });
  return (
    <View>
      <Text style={{ color: 'white' }}>MealDetails for: {route.params.mealId}</Text>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({});
