import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ShowCase = ({title, duration, url1}) => {
  return (
    <View style={styles.feeContainer}>
      <Image
        source={{uri: url1}}
        width={50}
        height={50}
        style={{borderRadius: 50}}
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
      <Image
        source={{
          uri: 'https://i.pinimg.com/736x/35/fb/05/35fb0533258a6789eba3b6d7d7f95eae.jpg',
        }}
        style={{borderRadius: 50}}
        width={50}
        height={50}
      />
    </View>
  );
};

export default ShowCase;

const styles = StyleSheet.create({
  feeContainer: {
    width: 330,
    height: 90,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#475264',
    marginBottom: 15,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});
