import { ScrollView, View, Text, Image } from 'react-native';
import { globalStyles } from '@/app/global-style';
import { useAuth } from '@/app/auth/AuthContext';

export default function UserScreen() {
  const { userData } = useAuth();

  return (
    <ScrollView style={globalStyles.container}>
      {userData && (
        <View
          style={{
            padding: 20,
            alignItems: 'center',
          }}
        >
          <Image
            source={{ uri: userData.picture }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginBottom: 20,
            }}
          />
          <Text style={globalStyles.titleText}>{userData.name}</Text>
          <Text style={globalStyles.normalText}>{userData.email}</Text>
        </View>
      )}
    </ScrollView>
  );
}
