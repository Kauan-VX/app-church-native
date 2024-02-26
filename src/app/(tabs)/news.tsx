import { FlashList } from "@shopify/flash-list";
import React from "react";
import { View } from "react-native";
import CardEvent, { ICardEvent } from "../components/event/card-event";

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
  {
    title: "Aviva Macapa",
    link: "https://alynekaiser.com.br/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-29-at-17.35.40-e1633884756748-780x470.jpeg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
  {
    title: "Aviva Macapa",
    link: "https://alynekaiser.com.br/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-29-at-17.35.40-e1633884756748-780x470.jpeg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
  {
    title: "Aviva Macapa",
    link: "https://alynekaiser.com.br/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-29-at-17.35.40-e1633884756748-780x470.jpeg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
  {
    title: "Aviva Macapa",
    link: "https://alynekaiser.com.br/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-29-at-17.35.40-e1633884756748-780x470.jpeg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
  {
    title: "Aviva Macapa",
    link: "https://alynekaiser.com.br/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-29-at-17.35.40-e1633884756748-780x470.jpeg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
  {
    title: "Aviva Macapa",
    link: "https://alynekaiser.com.br/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-29-at-17.35.40-e1633884756748-780x470.jpeg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
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

export default function News() {
  return (
    <View className="bg-light-background h-full w-full pt-4">
      <FlashList
        data={Events}
        estimatedItemSize={320}
        renderItem={({ item, index }) => (
          <View className="flex flex-col mb-[23rem] px-4">
            <CardEvent
              key={index}
              date={item.date}
              hour={item.hour}
              locale={item.locale}
              link={item.link}
              type={item.type}
              price={item.price}
              title={item.title}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = {
  scroll_view: "flex flex-col p-4 mt-4",
};
