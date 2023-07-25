import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    navigation.navigate('SignUp')
                }}>
                <Text style={styles.text} >SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    navigation.navigate('SignIn')
                }}>
                <Text style={styles.text} >SignIn</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 200
    },
    button: {
        height: 100,
        width: 100,
        backgroundColor: '#87cefa',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    }
})