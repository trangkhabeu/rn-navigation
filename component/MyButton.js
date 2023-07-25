import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export const MyButton = ({ buttonTitle, buttonColor }) => {
    const [title, setTitle] = useState('ボタン');
    let count = 100;

    console.log('レンダー', count);

    return (
        <TouchableOpacity
            onPress={() => {
                count += 1;
                // setTitle('タップされました');
            }}
            style={[styles.button, { backgroundColor: 'red' }]}>
            <Text>{title + count}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({})