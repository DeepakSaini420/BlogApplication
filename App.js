import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as BlogProvider } from "./src/context/BlogContext"; 
import HomeScreen from "./src/screens/HomeScreen";
import ShowScreen from "./src/screens/ShowScreen";

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ShowScreen" component={ShowScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ()=>{
  return (
    <BlogProvider>
      <App/>
    </BlogProvider>
  )
};