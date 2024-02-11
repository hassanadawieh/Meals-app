import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
// import FavoritesContextProvider from './store/context/favorite-context';
import {store} from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#3f2f25'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#351401',
      }}>
      <Drawer.Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({color, size}) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#351401" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'},
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            {/* <Drawer /> */}
            <Stack.Screen
              name="MealsOverView"
              component={MealsOverViewScreen}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                title: 'About the Meal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {},
// });
