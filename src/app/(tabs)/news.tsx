import React from "react";
import { View } from "react-native";
import CardEvent, { ICardEvent } from "../components/card-event";

export default function News() {
  const Events: ICardEvent[] = [
    {
      title: "Aviva Macapa",
      link: "https://alynekaiser.com.br/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-29-at-17.35.40-e1633884756748-780x470.jpeg",
      date: "22/05/24",
      hour: "17:30",
      locale: "Macapa",
      price: "Gratuito",
      type: "Somente para membros",
    },
  ];
  return (
    <View className={styles.scroll_view}>
      {Events.map((event, index) => (
        <CardEvent
          key={index}
          date={event.date}
          hour={event.hour}
          locale={event.locale}
          link={event.link}
          type={event.type}
          price={event.price}
          title={event.title}
        />
      ))}
    </View>
  );
}

const styles = {
  scroll_view: "flex flex-col p-4 mt-4",
};
