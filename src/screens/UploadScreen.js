import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class UploadScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>UploadScreen</Text>
            </View>
        );
    }
}
export default UploadScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});