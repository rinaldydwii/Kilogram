import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class FeedScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>FeedScreen</Text>
            </View>
        );
    }
}
export default FeedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});