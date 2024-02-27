import { Stack } from "expo-router";
import React from "react";

export default function TabRoutesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Perfil",
          headerStyle: {
            backgroundColor: "#00000048",
          },
        }}
      />
    </Stack>
  );
}
