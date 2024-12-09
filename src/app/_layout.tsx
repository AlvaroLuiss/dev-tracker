import { Slot, Stack } from "expo-router";
import "../styles/global.css";
import UserDetails from "./userDetails";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
        <Stack.Screen name="userDetails" />
      </Stack>
    </Provider>
  );
}
