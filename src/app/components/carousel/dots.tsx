import { StyleSheet, View } from "react-native";

type Props = {
  index: number;
  paginationIndex: number;
};

export default function Dot({ index, paginationIndex }: Props) {
  return (
    <View
      style={paginationIndex === index ? styles.dot : styles.dotOpacity}
    ></View>
  );
}

const styles = StyleSheet.create({
  dot: {
    backgroundColor: "black",
    height: 10,
    width: 25,
    marginHorizontal: 2,
    borderRadius: 8,
  },
  dotOpacity: {
    backgroundColor: "black",
    height: 9,
    width: 9,
    marginHorizontal: 2,
    borderRadius: 8,
    opacity: 0.3,
  },
});
