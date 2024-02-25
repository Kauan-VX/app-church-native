import BottomSheet from "@gorhom/bottom-sheet";
import React, { useMemo, useRef } from "react";
import { Text, View } from "react-native";

interface BottomSheetEventProps {
  onClose: () => void;
  // outras propriedades necessárias
}

export default function BottomSheetEvent({ onClose }: BottomSheetEventProps) {
  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={onClose}
      >
        <Text>Teste</Text>
      </BottomSheet>
    </View>
  );
}
