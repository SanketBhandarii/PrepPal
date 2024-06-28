import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Course = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 30,
      }}>
      <View style={styles.courseContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.offer}>60% off</Text>
          <Text style={styles.duration}>Feb 14 - Mar 20</Text>
          <TouchableOpacity style={styles.button} activeOpacity={0.9}>
            <Text
              style={{
                color: '#fff2d5',
                textAlign: 'center',
                paddingTop: 8,
                fontSize: 15,
              }}>
              Join Course
            </Text>
          </TouchableOpacity>
        </View>

        <Image source={require('../../../assets/bag.png')} style={styles.bag} />
      </View>
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: '#fff2d5',
    width: 350,
    height: 190,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 25,
    borderRadius: 20,
  },
  bag: {
    width: 170,
    height: 170,
  },
  contentContainer: {
    flex: 1,
    gap: 4,
  },
  offer: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2a3950',
  },
  duration: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2a3950',
  },
  button: {
    width: 120,
    height: 38,
    backgroundColor: '#2a3950',
    borderRadius: 20,
    marginTop: 10,
  },
});
