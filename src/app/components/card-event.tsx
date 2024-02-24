import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import React, { useMemo, useRef } from "react";
import { Image, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenPress = () => {
    bottomSheetRef.current?.expand();
    console.log("teste");
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-col bg-light-background shadow-md border-cyan-100 w-full  h-60 rounded-xl">
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: "#fff" }}
          enablePanDownToClose={true}
        >
          <View className="bg-orange-400">
            <Text>Teste</Text>
          </View>
        </BottomSheet>
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
  );
}

const styles = {
  info: "flex flex-row items-center gap-2",
  text: "text-xl",
  title: "text-3xl font-bold mb-4",
  icon: 24,
};
