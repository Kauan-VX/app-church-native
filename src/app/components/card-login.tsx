import { Image, View } from "react-native";

export interface ICardLogin {
  link: string;
}

export default function CardLogin({ link }: ICardLogin) {
  return (
    <View className="bg-white rounded-xl p-4 shadow-sm">
      <Image
        className="size-8"
        source={{
          uri: link,
        }}
      />
    </View>
  );
}
