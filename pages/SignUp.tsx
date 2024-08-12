import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {RootStackParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
const SignUp: React.FC<SignUpProps> = ({navigation}) => {
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
          width: '100%',
          height: '28%',
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
          <Text style={{color: '#000'}}>FullName:</Text>
          <TextInput
            placeholder="write first name..."
            style={styles.inputBox}
          />
        </View>

        <View style={{display: 'flex', gap: 5}}>
          <Text style={{color: '#000'}}>Email Address:</Text>
          <TextInput
            placeholder="write email address..."
            style={styles.inputBox}
            keyboardType="email-address"
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
          <Text style={styles.btnText}>Sign Up</Text>
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
          <Text style={{fontSize: 15, color: '#000', alignSelf: 'center'}}>
            Already have an account?{' '}
            <Text
              style={{
                fontSize: 15,
                color: '#D0B419',
                textDecorationLine: 'underline',
              }}
              onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  backButton: {
    width: 75,
    backgroundColor: '#F4D31D',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    padding: 5,
  },
  image: {
    height: '80%',
    width: '75%',
  },
  mainBox: {
    padding: 30,
    height: '70%',
    width: '100%',
    zIndex: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    display: 'flex',
    gap: 15,
  },
  inputBox: {
    color: '#000',
    paddingLeft: 15,
    padding: 2,
    height: 40,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
    width: '100%',
    height: 45,
    borderRadius: 10,
    backgroundColor: '#F4D31D',
  },
  btnText: {
    color: '#000',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  logoImage: {
    height: 40,
    width: 40,
  },
  logoImageContainer: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUp;
