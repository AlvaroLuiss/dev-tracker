import "../styles/global.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from ".";
import UserDetails from "./userDetails";

const Stack = createNativeStackNavigator();

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen
          name="index"
          component={HomePage}
          options={{ headerTitle: "Home" }}
        />
        <Stack.Screen name="userDetails" component={UserDetails} />
      </Stack.Navigator>
    </Provider>
  );
}
