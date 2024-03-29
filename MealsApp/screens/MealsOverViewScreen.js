import MealsList from '../components/MealsList/MealsList';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import {useEffect} from 'react';

const MealsOverViewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayMeals} navigation={navigation} />;
};

export default MealsOverViewScreen;
