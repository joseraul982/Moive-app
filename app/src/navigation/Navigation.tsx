import { createStackNavigator } from "@react-navigation/stack";
import HomeScreens from "../screens/home/HomeScreens";
import DetailsScreens from "../screens/details/DetailsScreens";

export type RootStackParams = {
  Home: undefined;
  Details: { movieId: number };
};

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreens} />
      <Stack.Screen name="Details" component={DetailsScreens} />
    </Stack.Navigator>
  );
};
