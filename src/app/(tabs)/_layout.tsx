import { theme } from "@/theme/Index";
import {
  FontAwesome6,
  Foundation,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabRoutesLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="inverted" />
      <Tabs
        screenOptions={{
          // headerShown: false,
          // headerTintColor: theme.colors.black,
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
          tabBarActiveTintColor: theme.colors.black,
          tabBarInactiveTintColor: theme.colors.gray[600],
          tabBarStyle: {
            height: 80,
            borderTopColor: theme.colors.gray[600],
            shadowColor: "#00000a",
            backgroundColor: theme.colors.white,
            paddingBottom: 20,
          },
          tabBarIconStyle: {
            color: theme.colors.black, // Defina uma cor diferente para os ícones
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
