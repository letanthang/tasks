import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { List, ListItem } from 'react-native-elements'

const rightButtonConfig = {
  title: 'next',
  handler: () => alert('Pressed!')
};

const titleConfig = {
  title: 'Hello World!'
};

const items = [
  {
    id: 123,
    name: 'Thang',
    icon: 'av-timer'
  },
  {
    id: 234,
    name: 'Dat',
    icon: 'flight-takeoff'
  },
  {
    id: 345,
    name: 'Cuong',
    icon: 'flight-takeoff'
  }
];

export default class App extends React.Component {
  componentWillMount() {
    console.log('Mounted!');
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar 
          title={titleConfig}
          rightButton={rightButtonConfig}
        />
        <View style={styles.content}>
          <List containerStyle={{ marginBottom: 20, flex: 1 }}>
            <FlatList
              data={items}
              renderItem={({item}) => (
                <ListItem
                  title={item.name}
                  leftIcon={{ name: item.icon }}
                />  
              )}
              keyExtractor={(item, index) => item.id}
            />
          </List>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
