import { ScrollView, View, Text, Image } from 'react-native';
import { useAuth } from '@/app/auth/AuthContext';

export default function UserScreen() {
  const { userData } = useAuth();

  return (
    <ScrollView className="container">
      {userData && (
        <View className="px-5 py-10 items-center">
          <Image
            source={{ uri: userData.picture }}
            className="w-24 h-24 rounded-full mb-4"
          />
          <Text className="title-text">{userData.name}</Text>
          <Text className="normal-text">{userData.email}</Text>
        </View>
      )}
    </ScrollView>
  );
}
