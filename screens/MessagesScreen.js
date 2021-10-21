import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ReactPlayer from 'react-player';

export default class MessagesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('RegenerationScreen');
          }}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <ReactPlayer
          url="https://youtu.be/r6Y7Nbu9LUs"
          width={200}
          height={200}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
