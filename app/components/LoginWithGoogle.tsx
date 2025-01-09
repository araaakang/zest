import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
const Glogo = require('@/assets/images/glogo.webp');

export default function LoginWithGoogle() {
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
