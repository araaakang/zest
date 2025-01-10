import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
export default function NotFoundScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Oops! Not Found</Text>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
