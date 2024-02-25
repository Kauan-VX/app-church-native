import "@/styles/global.css";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green" }}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "red" }}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
};

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
      <Toast config={toastConfig} />
    </GestureHandlerRootView>
  );
}
