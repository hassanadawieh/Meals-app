import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import MealItem from '../MealsList/MealItem';
import {useNavigation} from '@react-navigation/native';

const MealsList = ({items}) => {
  const navigation = useNavigation();

  const renderMealItems = itemData => {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    const pressHandler = () => {
      navigation.navigate('MealDetail', {
        mealId: itemData.item.id,
      });
    };

    return <MealItem {...mealItemProps} onPress={pressHandler} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItems}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
