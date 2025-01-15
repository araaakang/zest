import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '@/app/auth/AuthContext';

export default function LogoutButton() {
  const { setIsLoggedIn } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      '登出',
      '你確定要登出嗎？',
      [
        {
          text: '取消',
        },
        {
          text: '登出',
          onPress: () => setIsLoggedIn(false),
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <Ionicons
      name="log-out-outline"
      size={24}
      color="#fff"
      onPress={handleLogout}
      style={{ marginRight: 20 }}
    />
  );
}
