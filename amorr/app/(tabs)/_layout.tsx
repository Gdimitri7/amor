import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Bem-vinda! Amor",
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string;
            focused: boolean;
          }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              color={color}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "menu",

          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string;
            focused: boolean;
          }) => <Entypo name="500px-with-circle" size={24} color="black" />,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre Nós",
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string;
            focused: boolean;
          }) => (
            <MaterialCommunityIcons
              name="robot-love-outline"
              size={24}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
