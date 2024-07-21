import { Text, View } from "react-native";

interface DetailsProps {
  tripId: string;
}

export function Details({ tripId }: DetailsProps) {
  return (
    <View className="flex-1">
      <Text className="text-white">{tripId}</Text>
    </View>
  );
}