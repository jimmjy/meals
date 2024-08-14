import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import { useSelector, useDispatch } from 'react-redux';

// store
import { addFavourite, removeFavourite } from '../store/favourites';

// components
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

const MealDetailsScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  const selectedMeal = MEALS.find((meal) => meal.id === route.params.mealId);
  const isFavouriteMeal = favouriteMealIds.includes(selectedMeal.id);

  const changeFavouritesStatusHandler = useCallback(() => {
    dispatch(
      isFavouriteMeal
        ? removeFavourite({ id: selectedMeal.id })
        : addFavourite({ id: selectedMeal.id }),
    );
  }, [dispatch, isFavouriteMeal, selectedMeal.id]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color={isFavouriteMeal ? 'white' : 'black'}
            onPress={changeFavouritesStatusHandler}
          />
        );
      },
    });
  }, [changeFavouritesStatusHandler, isFavouriteMeal, navigation, selectedMeal.title]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },

  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
