import { theme } from "@/theme/Index";
import {
  FontAwesome6,
  Foundation,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabRoutesLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.black,
          },
          headerTintColor: theme.colors.white,
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.gray[600],
          tabBarStyle: {
            height: 80,
            borderWidth: 1,
            borderRadius: 30,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderColor: theme.colors.black,
            borderTopColor: theme.colors.black,
            backgroundColor: theme.colors.black,
            paddingBottom: 20,
          },
          tabBarLabelStyle: {
            color: theme.colors.white,
            fontSize: 10,
            fontWeight: "bold",
          },
        }}
      >
        <Tabs.Screen
          name="news"
          options={{
            title: "Início",
            tabBarIcon: ({ size, color }) => (
              <Foundation name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="pgs"
          options={{
            title: "Pg(s)",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome6 name="user-group" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            title: "Calendário",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="calendar-month" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Perfil",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}
