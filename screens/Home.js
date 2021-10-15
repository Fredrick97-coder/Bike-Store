import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import { Feather, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Feather name="menu" size={24} color="black" />
        <View>
          <MaterialCommunityIcons
            name="bicycle-basket"
            size={24}
            color="black"
          />
        </View>
        <View style={styles.rightNav}>
          <EvilIcons name="search" size={24} color="black" />
          <EvilIcons name="bell" size={24} color="black" />
        </View>
      </View>
      <View style={{ marginTop: 20, marginLeft: 10 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'rgb(211,211,211)',
          }}
        >
          The world's{' '}
          <Text style={{ color: '#F75C14', fontWeight: 'bold', fontSize: 20 }}>
            Best Bike
          </Text>
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20 }}>
          Categories
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    marginLeft: 5,
  },
  rightNav: {
    flexDirection: 'row',
    marginRight: 10,
  },
})
