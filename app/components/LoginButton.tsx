import { View, Text, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { Image } from 'expo-image';
import { globalStyles } from '@/app/global-style';
import { useAuth } from '@/app/auth/AuthContext';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

const Glogo = require('@/assets/images/glogo.webp');
const config = {
  webClientId:
    '516331288019-3beckbvq2b62a70t3ojup2ugmb2v42fc.apps.googleusercontent.com',
  iosClientId:
    '516331288019-r66mf1e2p07p1i0kjkflvuvn90vcjfha.apps.googleusercontent.com',
  androidClientId:
    '516331288019-gi9i35vgvbliapfd0m1n3q9aqtcjjtp9.apps.googleusercontent.com',
};

WebBrowser.maybeCompleteAuthSession();

export default function LoginWithGoogle() {
  const { setIsLoggedIn } = useAuth();
  const [_, response, promptAsync] = Google.useAuthRequest(config);
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
      const userData = {
        id: user.id,
        email: user.email,
        name: user.name,
        picture: user.picture,
      };
      console.log(userData);
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
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    handleToken();
  }, [response]);

  return (
    <View>
      <TouchableOpacity
        style={globalStyles.IconButton}
        onPress={() => {
          promptAsync();
        }}
      >
        <Image source={Glogo} style={{ width: 24, height: 24 }} />
        <Text style={globalStyles.normalText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}
