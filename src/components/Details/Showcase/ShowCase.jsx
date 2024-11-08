import {Image, StyleSheet, Text, View, Linking} from 'react-native';
import React, {useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const ShowCase = ({title, duration, url1, url2}) => {
  const navigation = useNavigation();

  // Handle link opening
  const handlePress = () => {
    Linking.openURL(url2);
  };

  return (
    <View style={styles.feeContainer}>
      <Image
        source={{uri: url1}}
        style={{width: 50, height: 50, borderRadius: 25}}
      />
      <View>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: '600',
            paddingBottom: 5,
          }}>
          {title}
        </Text>
        <Text style={{color: '#fff'}}>{duration}</Text>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/35/fb/05/35fb0533258a6789eba3b6d7d7f95eae.jpg',
          }}
          style={{width: 50, height: 50, borderRadius: 25}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  feeContainer: {
    width: 330,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#475264',
    marginBottom: 15,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});

export default ShowCase;
