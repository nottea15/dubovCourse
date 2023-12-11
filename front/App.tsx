import "react-native-gesture-handler";
import React, { useContext } from "react";
import "react-native-reanimated";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { colors } from "./src/constants/colors";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { AuthContext, AuthProvider } from "@utils/AuthContext";
import { MainNavigator } from "./src/navigators/MainNavigator";

const RootNavigation = () => {
  const { userToken } = useContext(AuthContext);
  return <>{!userToken ? <AuthNavigator /> : <MainNavigator />}</>;
};

function App(): JSX.Element {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
    },
  };

  return (
    <>
      <AuthProvider>
        <NavigationContainer theme={MyTheme}>
          <RootNavigation />
        </NavigationContainer>
      </AuthProvider>
    </>
  );
}

export default App;
