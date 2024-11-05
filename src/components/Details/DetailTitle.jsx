import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailTitle = ({ title }) => {
  const navigation = useNavigation();
  const [heartState, setHeartState] = useState({ heart: false, title: '' });

  const storeHeartValue = async (value) => {
    try {
      await AsyncStorage.setItem('@heartValue', JSON.stringify(value));
    } catch (e) {
      console.error('Failed to save heart value:', e);
    }
  };

  const getHeartValue = async () => {
    try {
      const value = await AsyncStorage.getItem('@heartValue');
      if (value !== null) {
        setHeartState(JSON.parse(value));
      }
    } catch (e) {
      console.error('Failed to load heart value:', e);
    }
  };

  useEffect(() => {
    getHeartValue();
  }, []);


  useEffect(() => {
    storeHeartValue(heartState);
  }, [heartState]);

  const toggleHeart = () => {
    setHeartState((prevState) => ({
      heart: !prevState.heart,
      title: title
    }));
  };

  return (
    <View style={styles.detailTitleContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          marginLeft: 17,
          backgroundColor: '#1ab3f0',
          padding: 5,
          borderRadius: 23,
        }}
      >
        <AntDesign name="arrowleft" size={30} color="#fff" />
      </TouchableOpacity>
      <Text
        style={{
          color: '#fff',
          fontSize: 23,
          fontWeight: 'bold',
          paddingLeft: 13,
        }}
      >
        Below-Details {/* Display the title */}
      </Text>
      <TouchableOpacity
        style={{ marginRight: 14, padding: 5 }}
        onPress={toggleHeart}
      >
        <AntDesign
          name={heartState.heart ? 'heart' : 'hearto'}
          size={30}
          color={heartState.heart ? '#fc4c66' : '#fff'}
        />
      </TouchableOpacity>
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
