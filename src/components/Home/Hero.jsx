import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import subjects from '../../../data/subjects';

const Hero = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30,
      }}>
      <View style={styles.heroHeaderContainer}>
        <Text style={styles.heroTitle}>Subject</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sub1Container}>
        {subjects.map((item, index) => {
          if (item.id < 3) {
            return (
              <TouchableOpacity
                key={item.id} // make sure each item has a unique key
                activeOpacity={0.6}
                onPress={() =>
                  navigation.navigate('Details', {sub: item.name})
                }>
                <View style={[styles.sub]}>
                  <Image
                    source={{
                      uri: item.img,
                    }}
                    style={{width: 100, height: 100, marginBottom: 10}}
                  />
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
                    {item.name}
                  </Text>
                  <Text style={{color: '#d4d6d9'}}>{item.price}</Text>
                  <Text style={{color: '#d4d6d9'}}>{item.rating}</Text>
                </View>
              </TouchableOpacity>
            );
          } else {
            return null;
          }
        })}
      </View>

      <View style={styles.sub2Container}>
        {subjects.map((item, index) => {
          if (item.id > 2) {
            return (
              <TouchableOpacity
                key={item.id} // make sure each item has a unique key
                activeOpacity={0.6}
                onPress={() =>
                  navigation.navigate('Details', {sub: item.name})
                }>
                <View style={[styles.sub]}>
                  <Image
                    source={{
                      uri: item.img,
                    }}
                    style={{width: 100, height: 100, marginBottom: 10}}
                  />
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
                    {item.name}
                  </Text>
                  <Text style={{color: '#d4d6d9'}}>{item.price}</Text>
                  <Text style={{color: '#d4d6d9'}}>{item.rating}</Text>
                </View>
              </TouchableOpacity>
            );
          } else {
            return null;
          }
        })}
      </View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  heroHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 135,
  },
  heroTitle: {
    color: '#fff2d5',
    fontSize: 32,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sub: {
    width: 165,
    height: 210,
    backgroundColor: '#475264',
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sub1Container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingTop: 30,
  },
  sub2Container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 15,
    paddingTop: 15,
  },
});
