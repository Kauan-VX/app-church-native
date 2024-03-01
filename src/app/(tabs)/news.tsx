import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CarouselEvents from "../components/carousel/carousel";
import { ICardEvent } from "../components/event/card-event";

const Events: ICardEvent[] = [
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
    link: "https://www.redebrasilatual.com.br/wp-content/uploads/2019/11/gospel.jpg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
  {
    id: 3,
    title: "Esther Marcos",
    link: "https://showgospel.com.br/wp-content/uploads/2023/07/banner-revista-show-gospel-edicao-76-redim-1-2.jpg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
];

const Pgs: ICardEvent[] = [
  {
    id: 1,
    title: "Aviva Macapa",
    link: "https://files.adventistas.org/institucional/pt/sites/8/2013/05/topo-pg-pt.jpg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
  {
    id: 2,
    title: "Aviva Macapa",
    link: "https://igrejamultiplicadora.org.br/new/wp-content/uploads/2017/02/cel1-768x425.jpg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
  {
    id: 3,
    title: "Aviva Macapa",
    link: "https://ipgracas.org.br/wp-content/uploads/2018/04/PequenoGrupo1-1060x655.jpg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
];

const Cults: ICardEvent[] = [
  {
    id: 1,
    title: "Aviva Macapa",
    link: "https://cdn6.campograndenews.com.br/uploads/noticias/2020/04/02/25lfui8wn3c0o.jpg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
  {
    id: 2,
    title: "Aviva Macapa",
    link: "https://gncnews.com.br/img/crop?img=d24ae76c829e14f6c7c045b5a9ea8ec1.jpg&w=800&h=400&fit=crop&fm=jpq&q=90",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
  {
    id: 3,
    title: "Aviva Macapa",
    link: "https://1.bp.blogspot.com/-XbgiFMTHRZ4/V-KLjNDSJII/AAAAAAAACwg/RmFx8dRYeBcCwNAresvQwxtMv6qDxkGPACLcB/s1600/IMG_9275.jpg",
    date: "22/05/24",
    hour: "17:30",
    locale: "Macapa",
    price: "Gratuito",
    type: "Somente para membros",
  },
];

export default function News() {
  return (
    <View className="bg-light-background flex-1 ">
      <ScrollView className="overflow-hidden">
        <CarouselEvents data={Pgs} title="Pg(s)" />
        <CarouselEvents data={Events} title="Eventos da Igreja" />
        <CarouselEvents data={Cults} title="Cultos" />
      </ScrollView>
    </View>
  );
}
