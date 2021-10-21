import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class RegenerationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('RiddlesScreen');
          }}>
          <Text style={styles.buttonText}>Riddles</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('MusicScreen');
          }}>
          <Text style={styles.buttonText}>Music</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {
          this.props.navigation.navigate('VideosScreen');
        }}>
          <Text style={styles.buttonText}>Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {
          this.props.navigation.navigate('MessagesScreen');
        }}>
          <Text style={styles.buttonText}>Motivational Messages</Text>
        </TouchableOpacity>
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
  label: {
    fontSize: RFValue(18),
    color: '#717D7E',
    fontWeight: 'bold',
    padding: RFValue(10),
    marginLeft: RFValue(20),
  },
  formTextInput: {
    width: '90%',
    height: RFValue(80),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'grey',
    marginBottom: RFValue(20),
    marginLeft: RFValue(20),
  },
  button: {
    width: '75%',
    height: RFValue(60),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: RFValue(50),
    backgroundColor: '#32867d',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(20),
  },
  buttonView: {
    flex: 0.22,
    alignItems: 'center',
    marginTop: RFValue(100),
  },
  buttonText: {
    fontSize: RFValue(23),
    fontWeight: 'bold',
    color: '#fff',
  },
});
