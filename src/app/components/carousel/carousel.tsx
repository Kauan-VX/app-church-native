import { useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import CardEvent from "../event/card-event";
import Dot from "./dots";

export interface IDataCarousel {
  title: string;
  data: any[];
}

export default function CarouselEvents({ title, data }: IDataCarousel) {
  const { width } = Dimensions.get("window");
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View>
      <View className="my-4 ml-4">
        <Text className="text-4xl font-semibold">{title}</Text>
      </View>
      <FlatList
        style={{ height: 600 }}
        keyExtractor={(_, index) => `list_item${index}`}
        data={data}
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
            id={item.id}
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
      {data.length > 1 ? (
        <View className=" flex-row justify-center items-center my-8">
          {data.map((_, i) => (
            <Dot index={i} paginationIndex={currentIndex} key={i} />
          ))}
        </View>
      ) : null}
    </View>
  );
}
