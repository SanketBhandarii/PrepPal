import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Fee = ({subtitle}) => {
  return (
    <View style={styles.feeContainer}>
        <View>
            <Text style={{color:"#fff", fontSize: 20, fontWeight: '600', paddingBottom: 5}}>{subtitle}</Text>
            <Text style={{color:"#fff"}}>⭐ 4.6 * 450 reviews</Text>
        </View>
        <View style={styles.feeBox}>
            <Text style={styles.feeText}>Fee</Text>
            <Text style={styles.amount}>Rs.0</Text>
        </View>
    </View>
  );
};

export default Fee;

const styles = StyleSheet.create({
    feeContainer: {
        height: 90,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#475264",
        gap: 20,
        marginTop: 25,
        borderRadius: 20,
    },
    feeBox: {
        backgroundColor: "#fff2d5",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    feeText: {
        color: "#475264",
        fontSize: 15,
        fontWeight: '600',
    },
    amount: {
        color: "#475264",
        fontSize: 15,
        fontWeight: '600',
    },
});
