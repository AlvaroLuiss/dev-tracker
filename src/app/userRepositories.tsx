import { repositoriesSlice } from "@/redux/repositoriesSlice";
import { store } from "@/redux/store";
import { MinimalRepository } from "@/types/apiTypes";
import { sortGitHubUserRepositories } from "@/utils/sortRepos";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type OrderByOption = {
  label: string;
  value: OrderProps["sortBy"];
};

const orderByOptions: OrderByOption[] = [
  { label: "Stars", value: "stars" },
  { label: "Forks", value: "forks" },
  { label: "Updated At", value: "updated_at" },
  { label: "Size", value: "size" },
  { label: "Name", value: "name" },
  { label: "Created At", value: "created_at" },
];

type OrderByProps = {
  orderBy: OrderProps;
  setOrderBy: React.Dispatch<React.SetStateAction<OrderProps>>;
};

const OrderBy: React.FC<OrderByProps> = ({ orderBy, setOrderBy }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSelectOption = (option: OrderByOption) => {
    console.log("Selecionou opção:", option.value);
    setOrderBy({
      ...orderBy,
      sortBy: option.value,
    });
    console.log("Estado orderBy atualizado:", orderBy);
    setIsVisible(false);
  };
  return (
    <View className="">
      <TouchableOpacity onPress={toggleVisibility}>
        <Text className="text-blue-600">
          {isVisible ? orderBy.sortBy : "Order By"}
        </Text>
      </TouchableOpacity>
      {isVisible && (
        <View
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{ elevation: 10 }}
        >
          {orderByOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => handleSelectOption(option)}
              className="bg-gray-100 p-2 border-b border-gray-200 w-36"
            >
              <Text className="text-blue-600">{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

type OrderProps = {
  sortBy: "stars" | "forks" | "updated_at" | "size" | "name" | "created_at";
  order: "asc" | "desc";
};

export default function UserRepositories() {
  const route = useRoute();

  const navigation = useNavigation();

  const [repositories, setRepositories] = useState(
    store.getState().repositories.repositories
  );
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setRepositories(store.getState().repositories.repositories);
    });
    return unsubscribe;
  }, []);

  const [orderBy, setOrderBy] = useState<OrderProps>({
    order: "desc",
    sortBy: "created_at",
  });

  useEffect(() => {
    if (repositories) {
      setRepositories(
        sortGitHubUserRepositories(repositories, orderBy.sortBy, orderBy.order)
      );
    }
  }, [orderBy]);
  if (!repositories) {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="">
      <View className=" flex-row px-5 gap-2 items-center justify-end relative z-40">
        <View className="text-xs font-bold">Sort by: </View>
        <View className="flex flex-row gap-1 items-center">
          <OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
          <Icon
            name="keyboard-arrow-down"
            size={20}
            className="text-blue-600"
          />
        </View>
      </View>
      <View className="md:grid grid-cols-2">
        <FlatList
          data={repositories}
          renderItem={({ item }) => (
            <View className="flex flex-row gap-2 flex-1">
              <View className="py-3 px-5 w-full">
                <Text className="text-lg font-boold">{item.name}</Text>
                <View className="flex flex-row w-[320px">
                  <Text
                    className="text-xs flex-wrap font-extralight flex-1  line-clamp-3 text-pretty break-all w-0"
                    style={{
                      flexWrap: "wrap",
                    }}
                  >
                    {item.description}
                  </Text>
                </View>
                <View className="flex-row justify-between w-full">
                  <View className="flex flex-row gap-5 items-start h-5 ">
                    <Text className="text-xs font-extralight mt-5">
                      {item.language || "Not included"}
                    </Text>
                    <View className="flex-row gap-2 mt-5">
                      <View className="flex flex-row gap-1">
                        <Icon name="star" size={14} className="text-gray-400" />
                        <Text className="text-xs font-extralight">
                          {item.stargazers_count}
                        </Text>
                      </View>
                      <View className="flex flex-row gap-1 ">
                        <Icon
                          name="share"
                          size={14}
                          className="text-gray-400"
                        />
                        <Text className="text-xs font-extralight">
                          {item.forks_count}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View className="flex">
                    <Link
                      href={`${item.html_url}`}
                      target="_blank"
                      className=" mt-2 "
                    >
                      <TouchableOpacity className="h-10 w-20 bg-green-200 mb-3 rounded-md">
                        <Text className="flex items-center my-auto mx-auto text-green-500">
                          Open
                        </Text>
                      </TouchableOpacity>
                    </Link>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
