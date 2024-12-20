import { Text, TextInput, TouchableOpacity, Image, View } from "react-native";
import AvatarImage from "../../src/assets/images/avatar.webp";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getUSer } from "@/redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AppDispatch } from "@/redux/store";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { userSlice } from "@/redux/userSlice";
import { SimpleUser } from "@/types/apiTypes";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState("");
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { setUser } = userSlice.actions;
  const handleFindUser = () => {
    dispatch(getUSer(username)).then((response) => {
      const user: SimpleUser = response.payload as SimpleUser;
      dispatch(setUser(user));
      navigation.navigate("userDetails");
    });
  };

  return (
    <View className=" bg-white px-6 py-3 h-full">
      <View className="flex flex-col mt-4 gap-40">
        <View>
          <View className="mt-10">
            <Text className="text-4xl font-bold text-black">
              Find <Text className="text-gray-200">a dev</Text>
            </Text>
          </View>

          <View className="mt-8">
            <View className="flex-row items-center bg-gray-100 px-4 py-3 rounded-lg">
              <TextInput
                placeholder="Type a Github username"
                className="flex-1 text-base text-gray-600"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
              <Icon
                className="text-lg text-gray-500"
                name="search"
                size={24}
              ></Icon>
            </View>
          </View>
        </View>

        <View className="mt-6 flex flex-col">
          <TouchableOpacity
            className="bg-gray-600 py-4 rounded-lg w-full"
            onPress={handleFindUser}
          >
            <Text className="text-center text-white font-medium text-lg">
              Find
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
