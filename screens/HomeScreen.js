//import liraries
import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native'
import { Feather, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import shoppingList from '../components/shop'
import COLORS from '../components/constant/color'

const width = Dimensions.get('screen').width / 2 - 30

const HomeScreen = () => {
  const [categoryIndex, setCategoryIndex] = useState(0)
  const categories = ['All', 'Roadbike', 'Mountain', 'Urban']

  function CategoriesList() {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}
          >
            <Text
              style={[
                styles.categoryText,
                categoryIndex == index && styles.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
  const Card = ({ item }) => {
    return <View style={styles.card}></View>
  }
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: 'white' }}
    >
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
          <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 20 }}>
            Best Bike
          </Text>
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20 }}>
          Categories
        </Text>
      </View>
      <CategoriesList />
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        data={shoppingList}
        renderItem={(item) => <Card bike={item} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginLeft: 5,
  },
  rightNav: {
    flexDirection: 'row',
    marginRight: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
    backgroundColor: 'rgba(211,211,211,0.5)',
    width: 'auto',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  categoryTextSelected: {
    color: 'orange',
    borderBottomWidth: 2,
    paddingBottom: 5,
    borderColor: 'orange',
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
  },
})

export default HomeScreen
