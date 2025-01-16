import { Text, View } from 'react-native';
import LoginButton from '@/app/components/LoginButton';

export default function LoginScreen() {
  return (
    <View className="container-center">
      <Text className="title-text">Login to Start</Text>
      <LoginButton />
    </View>
  );
}
