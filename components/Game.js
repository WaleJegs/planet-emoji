import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

// const Game = () => (
//   <View style={styles.container}>
//     <Text>This is my Game Component!</Text>
//   </View>
// );

export default class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const styles = StyleSheet.create({
            container: { 
                flex: 1, 
                alignItems: 'center', 
                backgroundColor: '#AAA',
                justifyContent: 'center' 
            }
        })

        return (
        <View style={styles.container}>
            <Text>This is my Game Component!</Text>
        </View>)
    }
}

// export default Game;