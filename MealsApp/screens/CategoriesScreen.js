import {Value} from 'react-native-reanimated';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';
import {View, Text, FlatList} from 'react-native';
const CategoriesScreen = ({navigation}) => {
  const renderCategoryItem = itemData => {
    const pressHandler = () => {
      navigation.navigate('MealsOverView', {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem.bind(navigation)}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
