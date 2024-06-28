import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={{paddingTop: 30}}>
      <Text style={styles.welcome}>Welcome</Text>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Find Your Course</Text>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/search.jpg")}
            width={50}
            height={50}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  welcome: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 13,
  },
  headerTitle: {
    color: '#fff2d5',
    fontSize: 32,
    fontWeight: 'bold',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  searchIcon: {
    backgroundColor: '#e5f6fd',
    borderRadius: 50,
    width:50,
    height:50
  },
});
