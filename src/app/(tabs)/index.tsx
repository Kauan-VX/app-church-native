import { IToken } from "@/models/user";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Link } from "expo-router";
import md5 from "md5";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import * as yup from "yup";
import CardLogin from "../components/card-login";
import { ControlledInput } from "../components/input-form";

type IFormLogin = {
  username: string;
  password: string;
};

const schema = yup.object({
  username: yup.string().required("E-mail obrigatório").email("Email inválido"),
  password: yup
    .string()
    .min(5, "Senha deve ter no mínimo 5 digitos")
    .required("Senha obrigatória"),
});

export default function Login() {
  const teste = "testeeee";
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
  });

  const handleLogin: SubmitHandler<IFormLogin> = async (data) => {
    try {
      const { username, password } = data;
      const passwordMD5 = md5(password).toString().toUpperCase();
      const response = await axios.post<IToken>(
        "https://api.petsimples.com/core/auth-company/",
        {
          username,
          password: passwordMD5,
        }
      );
      if (response.status === 200) {
      } else {
        Alert.alert(
          "Erro",
          "Não foi possível fazer login. Verifique suas credenciais."
        );
      }
    } catch (error) {
      Alert.alert("Erro");
      console.log(error);
    }
  };

  const IconLogin = [
    {
      link: "https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png",
    },
    {
      link: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    },
    {
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png",
    },
  ];
  return (
    <View className="flex-1 bg-dark-background">
      <View className="flex-[0.8] flex flex-col bg-dark-background justify-center items-center mt-2 p-4">
        <Text className={styles.title}>Iniciar sessão</Text>
        <Text className={styles.subtitle}>Olá, bem-vindo à sua conta</Text>
      </View>
      <View className="bg-light-background shadow-lg  rounded-[2rem] p-6 flex-1 flex flex-col">
        <View className="flex flex-col gap-2">
          <ControlledInput
            type="email"
            label="E-mail"
            name="username"
            placeholder="Insira seu e-mail"
            control={control}
            error={errors.username}
          />

          <ControlledInput
            type="email"
            label="Senha"
            name="password"
            placeholder="Insira sua senha"
            control={control}
            error={errors.password}
          />

          <View className="flex-row justify-end">
            <Link className="underline text-base font-semibold" href="/">
              Recuperar senha
            </Link>
          </View>
        </View>

        <View className="flex-row justify-center my-10">
          <Text className="font-bold text-xl ">Ou</Text>
        </View>
        <View className="flex flex-row gap-6 items-center justify-center">
          {IconLogin.map((skill, index) => (
            <CardLogin key={index} link={skill.link} />
          ))}
        </View>
        <TouchableOpacity
          onPress={handleSubmit(handleLogin)}
          className={styles.button}
        >
          <Text className={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  button: "items-center bg-dark-background rounded-[28px] shadow-md p-4  mt-8",
  buttonText: "text-white text-lg font-semibold text-center",
  main: "flex-1 bg-dark-background",
  title: "text-[64px] text-white font-semibold",
  subtitle: "text-4xl text-gray-700 text-white  text-center",
  input: "border",
};
