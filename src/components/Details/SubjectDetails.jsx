import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import DetailTitle from './DetailTitle';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fee from './Fee';
import Outline from './Outline';

const SubjectDetails = ({title}) => {
  return (
    <SafeAreaView
     >
      <ScrollView showsVerticalScrollIndicator={false}>
        <DetailTitle title={title}/>
        <Fee subtitle={title}/>
        <Outline title={title}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubjectDetails;

const styles = StyleSheet.create({});
