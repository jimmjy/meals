import { StyleSheet, Text, View, FlatList } from 'react-native';

// constants
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const renderCategoryItem = (itemData) => {
  return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
};

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
