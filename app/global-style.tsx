import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  titleText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  normalText: {
    color: '#fff',
    fontSize: 16,
  },
  IconButton: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 10,
  },
});
