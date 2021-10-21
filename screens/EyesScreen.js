import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ReactPlayer from 'react-player';

export default class EyesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('ExercisesScreen');
          }}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <ReactPlayer
          url="https://youtu.be/QQ3ki1dCcnw"
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
