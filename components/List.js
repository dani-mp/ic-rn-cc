import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Item from './Item';

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
  },
});

export default class extends React.Component {
  keyExtractor = item => item.data.id;

  renderItem = ({ item }) => (
    <Item item={item} onSelect={this.props.onSelectItem} />
  );

  render() {
    const { data, refreshing, onRefresh, onEndReached } = this.props;
    return (
      <FlatList
        data={data}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        style={styles.list}
      />
    );
  }
}
