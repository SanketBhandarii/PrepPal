import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import { useNavigation, useRoute } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const [controlsVisible, setControlsVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState({ currentTime: 0, seekableDuration: 0 });
  const videoRef = useRef();
  const route = useRoute();
  let vurl = route.params.url2;
  console.log(route);
  useEffect(() => {
    
    let timeout;
    if (controlsVisible) {
      timeout = setTimeout(() => {
        setControlsVisible(false);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [controlsVisible]);

  const handleVideoPress = () => {
    setControlsVisible(true);
  };

  const format = seconds => {
    let mins = parseInt(seconds / 60).toString().padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}>
        <Image
          source={{
            uri: 'https://www.pikpng.com/pngl/b/169-1691216_free-stock-photos-white-left-arrow-png-clipart.png',
          }}
          style={styles.backIcon}
        />
        <Text style={styles.backText}>Back t Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.videoContainer}
        onPress={handleVideoPress}>
        <Video
          paused={paused}
          source={vurl}
          ref={videoRef}
          onProgress={setProgress}
          style={styles.video}
          resizeMode="contain"
        />
        {controlsVisible && (
          <View style={styles.controlsOverlay}>
            <View style={styles.controlsRow}>
              <TouchableOpacity onPress={() => videoRef.current.seek(progress.currentTime - 10)}>
                <Image source={require('./icons/backward.png')} style={styles.controlIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setPaused(!paused)}>
                <Image
                  source={
                    paused
                      ? require('./icons/play-button.png')
                      : require('./icons/pause.png')
                  }
                  style={styles.controlIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => videoRef.current.seek(progress.currentTime + 10)}>
                <Image source={require('./icons/forward.png')} style={styles.controlIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.progressRow}>
              <Text style={styles.timeText}>{format(progress.currentTime)}</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={progress.seekableDuration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#fff"
                value={progress.currentTime}
                onValueChange={value => videoRef.current.seek(value)}
              />
              <Text style={styles.timeText}>{format(progress.seekableDuration)}</Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    gap: 40,
    backgroundColor: '#0003', // Optional: Adds a black background
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  backIcon: {
    width: 35,
    height: 30,
    tintColor: 'white',
  },
  backText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  videoContainer: {
    width: '100%',
    height: 200,
  },
  video: {
    width: '100%',
    height: 200,
  },
  controlsOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '60%',
  },
  controlIcon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    width: '100%',
  },
  timeText: {
    color: 'white',
  },
  slider: {
    width: '80%',
    height: 40,
  },
});

export default App;
