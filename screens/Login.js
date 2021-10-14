import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=418&q=80',
          height: 120,
          width: 120,
        }}
        style={styles.image}
      />
      <Text style={{ fontSize: 17 }}>Welcome to</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Power Bike Shop</Text>
      <TouchableOpacity style={styles.google}>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
            height: 20,
            width: 20,
          }}
        />
        <Text style={{ color: '#000', fontSize: 15, paddingLeft: 7 }}>
          Login in with Gmail
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.apple}>
        <FontAwesome name="apple" size={24} color="white" />
        <Text style={{ color: '#fff', fontSize: 15, paddingLeft: 7 }}>
          Login in with Apple
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.register}>
        <Text style={{ color: 'rgba(0,0,0,0.5)', fontSize: 15 }}>
          Not a member? <Text style={{ color: 'orange' }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  image: {
    transform: [{ rotate: '40deg' }],
    borderRadius: 7,
    marginBottom: 30,
  },
  google: {
    backgroundColor: 'rgba(211,211,211,0.3)',
    height: 40,
    width: 250,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    flexDirection: 'row',
  },
  apple: {
    backgroundColor: '#000',
    flexDirection: 'row',
    height: 40,
    width: 250,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  register: {
    marginTop: 10,
  },
})
