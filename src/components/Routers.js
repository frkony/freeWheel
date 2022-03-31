import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import {Dimensions, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import Wheeldestiny from '../screens/Wheeldestiny/Wheeldestiny';
import Suggestions from '../screens/Suggestions/Suggestions';
import Movie from '../screens/Movie/Movie';
import MovieSug from '../screens/Movie/MovieSug';
import Food from '../screens/Food/Food';
import FoodSug from '../screens/Food/FoodSug';
import Activity from '../screens/Activity/Activity';
import ActivitySug from '../screens/Activity/ActivitySug';
import Sexuality from '../screens/Sexuality/Sexuality';
import SexualitySug from '../screens/Sexuality/SexualitySug';

const Stack = createNativeStackNavigator();
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function Routers() {
  const {t} = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Wheeldestiny"
          component={Wheeldestiny}
          options={{
            title: t('WHEELDESTINY'),
            headerTitleAlign: 'center',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Suggestions"
          component={Suggestions}
          options={{
            title: t('SUGGESTIONS'),
            headerTitleAlign: 'center',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Movie"
          component={Movie}
          options={{
            title: t('MOVIE'),
            headerTitleAlign: 'center',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="MovieSug"
          component={MovieSug}
          options={{
            title: t('Film'),
            headerTitleAlign: 'center',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Food"
          component={Food}
          options={{
            title: t('FOOD'),
            headerTitleAlign: 'center',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="FoodSug"
          component={FoodSug}
          options={{
            title: t('FOOD'),
            headerTitleAlign: 'center',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Activity"
          component={Activity}
          options={{
            title: t('ACTIVITY'),
            headerTitleAlign: 'center',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="ActivitySug"
          component={ActivitySug}
          options={{
            title: t('ACTIVITYSUG'),
            headerTitleAlign: 'center',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Sexuality"
          component={Sexuality}
          options={{
            title: t('SEXUALITY'),
            headerTitleAlign: 'center',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="SexualitySug"
          component={SexualitySug}
          options={{
            title: t('SEXUALITYSUG'),
            headerTitleAlign: 'center',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routers;
