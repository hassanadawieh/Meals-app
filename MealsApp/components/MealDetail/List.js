import {Text, View, StyleSheet} from 'react-native';

const List = ({listOf}) => {
  return listOf.map((item, index) => (
    <View key={index} style={styles.listItem}>
      <Text style={styles.item}>{item}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  item: {
    color: '#351401',
    textAlign: 'center',
  },
});
