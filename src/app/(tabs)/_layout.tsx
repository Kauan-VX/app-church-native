import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabRoutesLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="news"
          options={{
            title: "Eventos",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="newspaper" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Configurações",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}
