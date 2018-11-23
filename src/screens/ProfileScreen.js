import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { f, database } from '../configs/config'

class ProfileScreen extends Component {
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
            {
                this.state.loggedIn ? 
                    (
                        <View style={styles.container}>
                            <View style={styles.headerBarContainer}>
                                <Text>Profile</Text>
                            </View>
                            <View style={styles.headerContainer}>
                                <Image source={{uri: "http://i.pravatar.cc/300"}} style={styles.avatarImage}/>
                                <View style={styles.nameContainer}>
                                    <Text>Name</Text>
                                    <Text>Username</Text>
                                    <TouchableOpacity style={styles.editButtonContainer}>
                                        <Text style={styles.editButtonText}>Edit Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>Log Out</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.contentPhotosContainer}>
                                <Text>Loading ...</Text>
                            </View>
                        </View>
                    ) : 
                    (
                        <View style={styles.container}>
                            <Text>You aren't login</Text>
                            <Text>Please login to view your profile</Text>
                        </View>
                    )
            }
            </View>
        )
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerBarContainer: {
        height: 70,
        paddingTop: 20,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#DFDFDF",
        borderBottomWidth: 1
    },
    headerContainer: {
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        borderColor: 'grey',
    },
    nameContainer: {
        marginLeft: 15,
        flex: 1,
    },
    avatarImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 10
    },
    editButtonContainer: {
        width: '100%',
        padding: 3,
        borderRadius: 5,
        borderColor: "grey",
        borderWidth: 0.5,
        marginTop: 10
    },
    editButtonText: {
        textAlign: "center"
    },
    buttonsContainer: {
        paddingHorizontal: 15,
        borderColor: "#DFDFDF",
        borderBottomWidth: 0.5,
        paddingBottom: 20
    },
    buttonContainer: {
        width: '100%',
        padding: 5,
        borderRadius: 5,
        borderColor: "grey",
        borderWidth: 0.5,
        marginTop: 10
    },
    buttonText: {
        textAlign: "center"
    },
    contentPhotosContainer: {
        flex: 1
    }
});