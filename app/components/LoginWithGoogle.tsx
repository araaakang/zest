import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
const Glogo = require('@/assets/images/glogo.webp');

const webClientId =
  '472681009553-sssviq8g9trsptv0hrciq2t46hodm4q0.apps.googleusercontent.com';
const iosClientId =
  '472681009553-gdq9kb4dvo6dkcqlckketcm44bk9d47h.apps.googleusercontent.com';
const androidClientId =
  '472681009553-d55ts0ei4f2vc6na0q6c5d0h23cjl0it.apps.googleusercontent.com';

WebBrowser.maybeCompleteAuthSession();

export default function LoginWithGoogle() {
  const config = {
    webClientId,
    iosClientId,
    androidClientId,
  };
  const [request, response, promptAsync] = Google.useAuthRequest(config);
  const getUserProfile = async (token: any) => {
    if (!token) return;
    try {
      const response = await fetch(
        'https://www.googleapis.com/userinfo/v2/me',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = await response.json();
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };
  const handleToken = () => {
    if (response?.type === 'success') {
      const { authentication } = response;
      const token = authentication?.accessToken;
      console.log('access token: ', token);
      getUserProfile(token);
    }
  };
  useEffect(() => {
    handleToken();
  }, [response]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          promptAsync();
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
