import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import SubjectDetails from '../Details/SubjectDetails';

const Details = () => {
  const route = useRoute();
  const sub = route.params.sub;

  const subjectDetails = {
    ReactJS: <SubjectDetails title="ReactJS" />,
    ExpressJS: <SubjectDetails title="ExpressJS" />,
    SQL: <SubjectDetails title="SQL" />,
    Physics: <SubjectDetails title="Physics" />,
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#2a3950',
        paddingHorizontal: 15,
        paddingTop: 30,
      }}>
      {subjectDetails[sub] || <Text>None</Text>}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
