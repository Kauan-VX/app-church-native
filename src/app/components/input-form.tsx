import React, { ChangeEvent } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

export interface InputProps {
  width?: string;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "search"
    | "checkbox"
    | "button";
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

type ControllerProps = InputProps & {
  control: Control<any>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name: string;
  error?: FieldError;
  label: string;
  placeholder: string;
};

export const ControlledInput = ({
  control,
  name,
  label,
  placeholder,
  error,
  ...rest
}: ControllerProps) => {
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
          />
        )}
      />
      {error && (
        <Text style={{ color: "#ff6666", fontWeight: "bold", marginTop: 5 }}>
          {error.message}
        </Text>
      )}
    </View>
  );
};
