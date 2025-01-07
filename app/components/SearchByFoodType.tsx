import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

export default function SearchByFoodType() {
  const foodTypes = [
    { imgSrc: require('@/assets/images/pizza.jpg'), label: '披薩' },
    { imgSrc: require('@/assets/images/sushi.jpg'), label: '壽司' },
    { imgSrc: require('@/assets/images/burger.jpg'), label: '漢堡' },
    { imgSrc: require('@/assets/images/pasta.jpg'), label: '義大利麵' },
    { imgSrc: require('@/assets/images/salad.jpg'), label: '輕食/健康餐' },
    { imgSrc: require('@/assets/images/steak.jpg'), label: '牛排' },
    { imgSrc: require('@/assets/images/dessert.jpg'), label: '甜點' },
    { imgSrc: require('@/assets/images/drink.jpg'), label: '飲料' },
    { imgSrc: require('@/assets/images/soup.jpg'), label: '湯品' },
  ];

  return (
    <View>
      <Text style={styles.subTitle}>按照菜系搜尋</Text>
      <View style={styles.foodGrid}>
        {foodTypes.map((food, index) => (
          <View key={index} style={styles.foodItem}>
            <Image source={food.imgSrc} style={styles.foodImage} />
            <View style={styles.overlay} />
            <Text style={styles.foodLabel}>{food.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 18,
  },
  foodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  foodItem: {
    width: '28%',
    position: 'relative',
  },
  foodImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  foodLabel: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 8,
  },
});
