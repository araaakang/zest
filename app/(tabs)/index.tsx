import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import Searchbar from '@/app/components/Searchbar';
import SearchByFoodType from '@/app/components/SearchByFoodType';
const CoverImage = require('@/assets/images/cover-image.jpg');

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={CoverImage} style={styles.image} />
        <Text style={styles.sloganText}>找美食？Zest！</Text>
        <View style={styles.searchbarContainer}>
          <Searchbar />
        </View>
      </View>
      <SearchByFoodType />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  sloganText: {
    position: 'absolute',
    top: 140,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 30,
  },
  searchbarContainer: {
    position: 'absolute',
    top: 180,
    left: '10%',
    right: '10%',
  },
  image: {
    width: 400,
    height: 240,
  },
});
