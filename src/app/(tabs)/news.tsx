import React, { useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import Dot from "../components/carousel/dots";
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
];

const Pgs: any[] = [
  {
    id: 1,
    title: "Aviva Macapa",
    link: "https://alynekaiser.com.br/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-29-at-17.35.40-e1633884756748-780x470.jpeg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
  {
    id: 2,
    title: "Aviva Macapa",
    link: "https://agencia.ac.gov.br/wp-content/uploads/2023/08/AF281FC4-1434-4191-823A-CDB60910F24E-2.jpeg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
  {
    id: 3,
    title: "Aviva Macapa",
    link: "https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2022/10/image-10.png",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
];

export default function News() {
  const { width } = Dimensions.get("window");
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View className="bg-light-background flex-1 pt-4">
      <View className="my-4 ml-4">
        <Text className="text-4xl font-semibold">Eventos</Text>
      </View>
      <FlatList
        style={{ height: 600, flexGrow: 0 }}
        keyExtractor={(_, index) => `list_item${index}`}
        data={Pgs}
        horizontal={true}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          setCurrentIndex(event.nativeEvent.contentOffset.x / width);
        }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        bounces={false}
        renderItem={({ item, index }) => (
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
        )}
      />
      {Pgs.length > 1 ? (
        <View className=" flex-row justify-center items-center my-8">
          {Pgs.map((_, i) => (
            <Dot index={i} paginationIndex={currentIndex} key={i} />
          ))}
        </View>
      ) : null}
    </View>
  );
}
