import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import {FavoritesContext} from '../store/context/favorite-context';
import {MEALS} from '../data/dummy-data';
import {useSelector} from 'react-redux';
const FavoritesScreen = () => {
  const favoritesMealContext = useContext(FavoritesContext);
  // const favoriteMeals = MEALS.filter(meal =>
  //   favoritesMealContext.ids.includes(meal.id),
  // );

  //redux
  const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter(meal =>
    favoriteMealsIds.includes(meal.id),
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  } else {
    return <MealsList items={favoriteMeals} />;
  }
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
