import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ShowCase from './Showcase/ShowCase';

const Outline = ({title}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
      {title == 'ReactJS' ? (
        <View>
          <Image
            source={{
              uri: 'https://png.pngtree.com/png-vector/20230324/ourmid/pngtree-computer-science-flat-icon-vector-png-image_6666748.png',
            }}
            style={{width: 340, height: 340, marginBottom:30, borderRadius:40}}
          />
          <ShowCase
            title={'ReactJS Course'}
            duration={'Full Playlist ( Chai aur Code )'}
            url1={
              'https://sourcebae.com/blog/wp-content/uploads/2023/08/3909258.jpg'
            }
            url2={'https://youtu.be/vz1RlUyrc3w?si=iWWzYh2ZD6w4Sn03'}
          />
        </View>
      ) : title == 'ExpressJS' ? (
        <View style={{flex: 1, alignItems: 'center', gap: 50}}>
          <Image
            source={{
              uri: 'https://cdn.prod.website-files.com/6449405754e757db07f25327/665642ccf15387c17b7ddee2_node.webp',
            }}
            style={{width: 270, height: 270}}
          />
          <ShowCase
            title={'ExpressJS Course'}
            duration={'Full Playlist ( Chai aur Code )'}
            url1={'https://img.icons8.com/win10/200/FFFFFF/node-js.png'}
            url2={'https://youtu.be/EH3vGeqeIAo?si=JysB4zuoxRtM_93Y'}
          />
        </View>
      ) : title == 'SQL' ? (
        <View style={{flex: 1, alignItems: 'center', gap: 50}}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/4492/4492311.png',
            }}
            style={{width: 240, height: 240}}
          />
          <ShowCase
            title={'SQL Full Course'}
            duration={'freeCodeCamp.org'}
            url1={
              'https://media.licdn.com/dms/image/D4D12AQHOe5HF849Xtw/article-cover_image-shrink_720_1280/0/1696684905692?e=2147483647&v=beta&t=jOyXyi5MIKBQS3MmuDQqusJyi1RJD4WqXMFhVIh4jOo'
            }
            url2={
             'https://youtu.be/HXV3zeQKqGY?si=8pXl_0V1r1fUatst'
            }
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
            url2={
              'https://youtu.be/0d8zh2swxwo?si=i2Wi97up_jBaUbn2'
            }
          />
        </View>
      ) : null}
    </View>
  );
};

export default Outline;

const styles = StyleSheet.create({});
