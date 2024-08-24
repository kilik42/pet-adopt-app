import { Link } from 'expo-router';
import { Text, View, Image, StyleSheet, Platform, Pressable } from 'react-native';


export default function HomeScreen() {
  return (
     <View
      style ={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      }}
     >
       <Link href={"/login"}>
        <Text> Go to login screen</Text>
       </Link>
     </View>
  );
}

