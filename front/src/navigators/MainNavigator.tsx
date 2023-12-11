import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/main/HomeScreen";
import { SearchScreen } from "../screens/main/SearchScreen";
import { CartScreen } from "../screens/main/CartScreen";
import Home from "@assets/icons/home.svg";
import Search from "@assets/icons/search.svg";
import Cart from "@assets/icons/cart.svg";
import { colors } from "@constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Scanner } from "../screens/main/BarcodeScanner/BarcodeScanner";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="BarcodeScanner" component={Scanner} />
    </Stack.Navigator>
  );
};

export const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Home
                color={focused ? colors.main : colors.darkGray}
                width={24}
                height={24}
              />
            );
          },
          tabBarActiveTintColor: colors.main,
        }}
        name="Головна"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Search
                color={focused ? colors.main : colors.darkGray}
                width={24}
                height={24}
              />
            );
          },
          tabBarActiveTintColor: colors.main,
        }}
        name="Пошук"
        component={SearchStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Cart
                color={focused ? colors.main : colors.darkGray}
                width={24}
                height={24}
              />
            );
          },
          tabBarActiveTintColor: colors.main,
        }}
        name="Корзина"
        component={CartScreen}
      />
    </Tab.Navigator>
  );
};
