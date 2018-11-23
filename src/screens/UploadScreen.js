import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { f, database } from '../configs/config'

class UploadScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false
        }
    }
    componentDidMount() {
        f.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    loggedIn: true
                })
            } else {
                this.setState({
                    loggedIn: false
                })
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                { this.state.loggedIn ? 
                    <Text>Text</Text> : 
                    (
                        <View>
                            <Text>You aren't login</Text>
                            <Text>Please login to upload a photo</Text>
                        </View>
                    )
                }
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