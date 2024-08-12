import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type HomeProps = NativeStackScreenProps<RootStackParamList,"Home">;
const Home:React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#8774F5'} barStyle={'dark-content'} />
      <View>
        <Text style={styles.heading}>Let's Get Started!</Text>
      </View>

      <View style={{width: '100%', height: '50%'}}>
        <Image
          source={require('../assets/working-man.png')}
          style={styles.image}
        />
      </View>

      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
        }}>
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={()=>navigation.navigate('SignUp')}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 15, color: '#fff'}}>
          Already have an account?{' '}
          <Text style={{fontSize: 15, color: '#D0B419',textDecorationLine: "underline"}} onPress={()=>navigation.navigate("Login")}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8774F5',
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading: {
    fontSize: 35,
    color: '#fff',
    fontWeight: "700",
  },
  image: {
    height: '100%',
    width: '100%',
  },
  button: {
    width: '85%',
    height: 45,
    borderRadius: 10,
    backgroundColor: '#F4D31D'
  },
  btnText: {
    color: '#000',
    fontSize: 22,
    fontWeight: "600",
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default Home;
