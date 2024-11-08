import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ShowCase from './Showcase/ShowCase';

const Outline = ({title}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
      {title == 'Mathematics' ? (
        <View>
          <Image
            source={{
              uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/rounder-6188701-5073570.png?f=webp',
            }}
            style={{width: 340, height: 340}}
          />
          <ShowCase
            title={'Pythagoras Theorem'}
            duration={'20:60 min'}
            url1={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIEfmjGzOXrMW1prnoe2MAPnxdeKWVRio1g&s'
            }
            url2={require('./Video/Pythagoras.mp4')}
          />
        </View>
      ) : title == 'Chemistry' ? (
        <View style={{flex: 1, alignItems: 'center', gap: 50}}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/710/710481.png',
            }}
            style={{width: 270, height: 270}}
          />
          <ShowCase
            title={'Carbon Compounds'}
            duration={'20:60 min'}
            url1={'https://cdn-icons-png.flaticon.com/512/7812/7812701.png'}
            url2={require('./Video/Carbon.mp4')}
          />
        </View>
      ) : title == 'Biology' ? (
        <View style={{flex: 1, alignItems: 'center', gap: 50}}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2784/2784428.png',
            }}
            style={{width: 240, height: 240}}
          />
          <ShowCase
            title={'Energy Production'}
            duration={'20:60 min'}
            url1={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHMuXnA4oGZJF96hrNaZ4hRmok9UQ1mTaZw&s'
            }
            url2={require("./Video/Energy.mp4")}
          />
        </View>
      ) : title == 'Physics' ? (
        <View style={{flex: 1, alignItems: 'center', gap: 50}}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5190/5190400.png',
            }}
            style={{width: 240, height: 240}}
          />
          <ShowCase
            title={'Regelation with Ex.'}
            duration={'20:60 min'}
            url1={
              'https://img.favpng.com/23/17/18/lab-icon-flask-icon-physics-icon-png-favpng-hqGeuRpVqwrYit2CkX0CKSqFe.jpg'
            }
            url2={require('./Video/Regelation.mp4')}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Outline;

const styles = StyleSheet.create({});
