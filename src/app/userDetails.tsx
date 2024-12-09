import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { SimpleUser } from "@/types/apiTypes";
import AvatarImage from "../../src/assets/images/avatar.webp";

export default function UserDetails() {
  const route = useRoute();
  const { user } = route.params as { user: SimpleUser };
  return (
    <View className=" bg-white ">
      <View className=" flex flex-col gap-2">
        <Image
          source={AvatarImage}
          className="max-h-52 max-w-[320px] object-center"
        />
        <View className="px-5 gap-3">
          <View className=" gap-3">
            <Text className="text-2xl font-bold">{user.name}</Text>
            <View className="flex-row gap-3 items-center">
              <View className="rounded-full w-2 h-2 bg-gray-300 self-center flex"></View>
              <Text className="text-sm font-extralight text-gray-500">
                {user.email || "Email not registered"}
              </Text>
            </View>
          </View>
          <View>
            <Text className="text-sm font-extralight" numberOfLines={4}>
              {user.bio || "Bio not registered"}
            </Text>
          </View>
          <View className="flex-row justify-center gap-8">
            <View className="flex flex-col">
              <Text className="text-base font-normal">Followers</Text>
              <Text className="text-lg text-blue-400 self-center">
                {user.followers}
              </Text>
            </View>
            <View className="bg-slate-300 h-14 w-0.5"></View>
            <View>
              <Text className="text-base font-normal">Following</Text>
              <Text className="text-lg text-blue-500 self-center">
                {user.following}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <Text className="text-center text-white font-medium text-lg h-14 bg-green-400 rounded-lg items-center flex justify-center">
                See repositories
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
