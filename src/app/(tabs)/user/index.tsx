import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Settings() {
  return (
    <View className="bg-light-background h-full w-full">
      <View className="flex-col">
        <Link className={styles.link} href="/">
          Informações do usuário
        </Link>
        <Link className={styles.link} href="/">
          Configurações do App
        </Link>
        <Link className={styles.link} href="/">
          Configurações de Notificações
        </Link>
        <Link className={styles.link} href="/">
          <MaterialIcons name="exit-to-app" size={24} color="black" />
        </Link>
      </View>
    </View>
  );
}

const styles = {
  link: "border-slate-300 border-[0.5px] py-4  px-2 text-2xl font-semibold flex items-center",
};
