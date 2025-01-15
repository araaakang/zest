import { Text, View } from 'react-native';
import LoginButton from '@/app/components/LoginButton';
import { globalStyles } from '@/app/global-style';

export default function LoginScreen() {
  return (
    <View
      style={[
        globalStyles.container,
        { justifyContent: 'center', alignItems: 'center' },
      ]}
    >
      <Text style={globalStyles.titleText}>Login to Start</Text>
      <LoginButton />
    </View>
  );
}
