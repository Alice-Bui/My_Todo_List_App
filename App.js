/// App.js
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import Home from "./src/screens/Home";
import AddNewTodo from "./src/screens/AddNewTodo";
const Stack = createStackNavigator()

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular, Poppins_600SemiBold
  })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Add New Todo" component={AddNewTodo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}