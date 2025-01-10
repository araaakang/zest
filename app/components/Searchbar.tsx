import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Searchbar() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
    // Add some logic here to handle the search
    console.log('搜尋文字:', text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          style={{ marginRight: 8 }}
          name={'search'}
          color="#888"
          size={30}
        />
        <TextInput
          style={styles.input}
          placeholder="輸入搜尋內容"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 40,
    width: '90%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});
