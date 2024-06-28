import React, {useEffect} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    }, 1500);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.dribbble.com/userupload/12196251/file/original-84d2e13b8e5602c0e15a891bb8fdb101.png?resize=400x300&vertical=center',
        }}
        style={styles.image}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#182123',
  },
  image: {
    width: 300,
    height: 300,
  },
});
