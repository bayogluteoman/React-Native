import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


export default class QuizCorrect extends React.Component {
    home = () => {
        this.props.navigation.navigate('HomeScreen');
    }

    tryAgain = () => {

        this.props.navigation.navigate('Quiz');
    }

    render() {
        const correct = this.props.navigation.getParam('correct');
        const total = this.props.navigation.getParam('total');

        return (
            <View style={styles.container}>
                <Text style={styles.scoreText}>
                    {correct} / {total}
                </Text>
                <TouchableOpacity onPress={this.home}>
                    <Text style={styles.buttonContainer}> HOME
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.tryAgain}>
                    <Text style={styles.buttonContainer}> TRY AGAIN
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 50,
        padding: 25,
        backgroundColor: 'skyblue'
    },
    scoreText: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        marginTop: 150
    }
})