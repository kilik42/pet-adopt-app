import { Tabs, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    'outfitr': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfitb': require('../assets/fonts/Outfit-SemiBold.ttf'),
    'outfitm': require('../assets/fonts/Outfit-Medium.ttf'),
    "outfitl": require("../assets/fonts/Outfit-Light.ttf"),
    "outfiteb": require("../assets/fonts/Outfit-ExtraBold.ttf"),
  })
  if (!fontsLoaded) {
    return null; // or a loading indicator
  }
  return (
    <Stack>
      <Stack.Screen name ="index"  />
      <Stack.Screen name ="login/index" 
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
}
