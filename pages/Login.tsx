import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {styles} from './SignUp';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
const Login: React.FC<LoginProps> = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#8774F5',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <View style={{padding: 20, alignSelf: 'flex-start'}}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={{color: '#000', textAlign: 'center'}}>Go Back</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '130%',
          height: '40%',
          display: 'flex',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/signup-page.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.mainBox}>
        <View style={{display: 'flex', gap: 5}}>
          <Text style={{color: '#000'}}>Email Address:</Text>
          <TextInput
            placeholder="write email address..."
            style={styles.inputBox}
          />
        </View>

        <View style={{display: 'flex', gap: 5}}>
          <Text style={{color: '#000'}}>Password:</Text>
          <TextInput
            placeholder="write password..."
            style={styles.inputBox}
            secureTextEntry
          />
          <Text
            style={{
              alignSelf: 'flex-end',
              color: '#000',
              padding: 3,
              textDecorationLine: 'underline',
            }}>
            Forgot Password?
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 28,
            fontWeight: '700',
            color: '#000',
            alignSelf: 'center',
          }}>
          Or
        </Text>

        <View style={{display: 'flex', gap: 30}}>
          <View
            style={{
              height: '20%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.logoImageContainer}>
                <Image
                  source={require('../assets/google-logo.png')}
                  style={styles.logoImage}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.logoImageContainer}>
                <Image
                  source={require('../assets/apple-logo.png')}
                  style={styles.logoImage}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.logoImageContainer}>
                <Image
                  source={require('../assets/facebook-png.png')}
                  style={styles.logoImage}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
