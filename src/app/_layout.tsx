import { Loading } from '@/components/loading';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import { Slot } from 'expo-router';
import { StatusBar, View } from 'react-native';

import "@/styles/global.css";
import "@/utils/dayjsLocaleConfig";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_600SemiBold
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-zinc-950">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Slot />
    </View>
  );
}