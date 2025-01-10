import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
const Glogo = require('@/assets/images/glogo.webp');

const webClientId =
  '472681009553-sssviq8g9trsptv0hrciq2t46hodm4q0.apps.googleusercontent.com';
const iosClientId =
  '472681009553-gdq9kb4dvo6dkcqlckketcm44bk9d47h.apps.googleusercontent.com';
const androidClientId =
  '472681009553-d55ts0ei4f2vc6na0q6c5d0h23cjl0it.apps.googleusercontent.com';

export default function LoginWithGoogle() {
  const config = {
    webClientId,
    iosClientId,
    androidClientId,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          console.log('LOGIN WITH GOOGLE');
        }}
      >
        <Image source={Glogo} style={{ width: 30, height: 30 }} />
        <Text style={styles.text}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
