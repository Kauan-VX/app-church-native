import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheetEvent from "./bottom-sheet-event";

export interface ICardEvent {
  title: string;
  link: string;
  hour: string;
  date: string;
  type: "Aberto para todos" | "Somente para membros";
  price: "Gratuito" | number;
  locale: string;
}

export default function CardEvent({
  link,
  date,
  hour,
  locale,
  price,
  type,
  title,
}: ICardEvent) {
  const [showBottomSheet, setShowBottomSheet] = useState(false); // Estado para controlar a exibição do BottomSheetEvent

  const handleOpenPress = () => {
    setShowBottomSheet(true); // Mostrar o BottomSheetEvent quando o botão for pressionado
    console.log("teste");
  };

  return (
    <TouchableOpacity onPress={handleOpenPress}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View className="flex-col bg-light-background shadow-md border-cyan-100 w-full  h-60 rounded-xl">
          <View className="rounded-t-xl">
            <Image
              className="w-full h-full rounded-t-xl object-cover"
              source={{
                uri: link,
              }}
            />
          </View>
          <View className=" bg-light-background shadow-sm h-full p-4 rounded-b-xl">
            <Text className={styles.title}>{title}</Text>
            <View className="flex-col gap-2">
              <View className={styles.info}>
                <FontAwesome
                  name="calendar-check-o"
                  size={styles.icon}
                  color="black"
                />
                <Text className={styles.text}>{date}</Text>
              </View>
              <View className={styles.info}>
                <MaterialIcons
                  name="location-on"
                  size={styles.icon}
                  color="black"
                />
                <Text className={styles.text}>{locale}</Text>
              </View>
              <View className={styles.info}>
                <MaterialCommunityIcons
                  name="clock"
                  size={styles.icon}
                  color="black"
                />
                <Text className={styles.text}>{hour}</Text>
              </View>
              <View className={styles.info}>
                <MaterialCommunityIcons
                  name="format-list-bulleted-type"
                  size={styles.icon}
                  color="black"
                />
                <Text className={styles.text}>{type}</Text>
              </View>
              <View className={styles.info}>
                <MaterialIcons
                  name="attach-money"
                  size={styles.icon}
                  color="black"
                />
                <Text className={styles.text}>{price}</Text>
              </View>
            </View>
          </View>
        </View>
      </GestureHandlerRootView>
      {showBottomSheet && (
        <View style={{ flex: 1 }}>
          <BottomSheetEvent onClose={() => setShowBottomSheet(false)} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = {
  info: "flex flex-row items-center gap-2",
  text: "text-xl",
  title: "text-3xl font-bold mb-4",
  icon: 24,
};
