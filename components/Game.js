import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { emojis }  from '../utils/emoji.js';

// const Game = () => (
//   <View style={styles.container}>
//     <Text>This is my Game Component!</Text>
//   </View>
// );

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            emojis: [],
            randomQuestion: 0,
            score: 0
        };
        this.restartGame = this.restartGame.bind(this);
        this.pickRandomQuestion = this.pickRandomQuestion.bind(this)
    }

    componentDidMount(){
        this.restartGame();
    }

    pickRandomQuestion(arr){
        return Math.floor(Math.random() * arr.length);
    }

    restartGame(){
        this.setState({ emojis, randomQuestion: this.pickRandomQuestion(emojis), score: 0 });
    }

    render(){
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#AAA',
                justifyContent: 'center'
            }
        });

        return (
        <View style={styles.container}>
            {
                this.state.emojis.map((emoji, index) => (<Text key={index}>{emoji.question}</Text>))
            }
            <Text> SCORE: { this.state.score } </Text>
        </View>);
    }
}

// export default Game;
