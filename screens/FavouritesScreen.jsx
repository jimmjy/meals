import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { MEALS } from '../data/dummy-data';

// state
import { useSelector } from 'react-redux';
import MealItem from '../components/MealItem';
import { FlatList } from 'react-native-gesture-handler';

const FavouritesScreen = () => {
  const savedMeals = useSelector((state) => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter((meal) => savedMeals.includes(meal.id));

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.headingText}>You have no favourite meals yet.</Text>
        {favouriteMeals.map((meal) => (
          <Text>{meal.title}</Text>
        ))}
      </View>
    );
  }

  const renderFavourites = ({
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

  return <FlatList data={favouriteMeals} key={(item) => item.id} renderItem={renderFavourites} />;
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
