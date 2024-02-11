import {useLayoutEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  Pressable,
} from 'react-native';
import {MEALS} from '../data/dummy-data';
import SubTitle from '../components/MealDetail/SubTitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../store/redux/favorites';

const MealDetailScreen = ({route, navigation}) => {
  const mealId = route.params.mealId;
  const displayDetails = MEALS.find(mealItem => mealId === mealItem.id);

  const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);//[1,2,3,4,5]
  const mealIsFavorite = favoriteMealsIds.includes(mealId);
  const dispatch = useDispatch();
  function changeStatusdHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({id: mealId}));
    } else {
      dispatch(addFavorite({id: mealId}));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            title="tap me"
            onPress={changeStatusHandler}
            status={mealIsFavorite}
          />
        );
      },
    });
  }, [navigation, changeStatusHandler, mealIsFavorite]);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: displayDetails.imageUrl}} />
      <View style={styles.listContainer}>
        <Text style={styles.title}>{displayDetails.title}</Text>
        <SubTitle>ingredients</SubTitle>
        <List listOf={displayDetails.ingredients} />
        <SubTitle>Steps</SubTitle>
        <List listOf={displayDetails.steps} />
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  listContainer: {
    marginBottom: 50,
  },
});
