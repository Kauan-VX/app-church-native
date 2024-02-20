import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

interface Props {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  secureTextEntry?: boolean;
  error?: string;
}

const FormTextInput: React.FC<Props> = ({
  control,
  name,
  placeholder,
  onBlur,
  label,
  secureTextEntry = false,
  error,
}) => {
  return (
    <View>
      <Text>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur } }) => (
          <TextInput
            className=" p-4 bg-slate-200 font-semibold rounded-xl text-gray-700"
            placeholder={placeholder}
            placeholderTextColor="#64748b"
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
          />
        )}
      />
      {error && (
        <Text style={{ color: "#ff6666", fontWeight: "bold", marginTop: 5 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default FormTextInput;
