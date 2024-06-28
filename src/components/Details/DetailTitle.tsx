import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const DetailTitle = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.detailTitleContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={{
            uri: 'https://www.pikpng.com/pngl/b/169-1691216_free-stock-photos-white-left-arrow-png-clipart.png',
          }}
          width={35}
          height={30}
          style={{marginLeft: 15}}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: '#fff',
          fontSize: 23,
          fontWeight: 'bold',
          paddingLeft: 13,
        }}>
        Details
      </Text>
      <Image
        source={{
          uri: 'https://png.pngtree.com/png-vector/20240108/ourmid/pngtree-heart-sticker-for-valentine-s-day-in-white-outline-png-image_11370335.png',
        }}
        width={45}
        height={45}
        style={{marginRight: 10}}
      />
    </View>
  );
};

export default DetailTitle;

const styles = StyleSheet.create({
  detailTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
