import Drawer from "expo-router/drawer";

export default function TabRoutesLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="(home)" options={{}} />
      <Drawer.Screen name="(favorites)" options={{}} />
    </Drawer>
  );
}
