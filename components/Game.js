import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
            emojis: []
        };
        this.restartGame = this.restartGame.bind(this);
    }

    componentDidMount(){
        this.restartGame();
    }

    restartGame(){
        this.setState({ emojis });
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
        </View>);
    }
}

// export default Game;
