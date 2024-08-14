import { FlatList, StyleSheet, View } from 'react-native';
import React, { useLayoutEffect } from 'react';

// components
import MealItem from '../components/MealItem';

// constants
import { MEALS, CATEGORIES } from '../data/dummy-data';

const MealsOverview = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const { title } = CATEGORIES.find((category) => category.id === catId);

    navigation.setOptions({ title });
  }, [catId, navigation]);

  const renderMealItem = ({
    item: { title, imageUrl, duration, complexity, affordability, id },
  }) => {
    return (
      <MealItem
        title={title}
        imageUrl={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        mealId={id}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={displayMeals} key={(item) => item.id} renderItem={renderMealItem} />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
