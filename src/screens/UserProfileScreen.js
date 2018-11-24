import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { f, database } from '../configs/config'

class UserProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            userId: '',
            name: '',
            username: '',
            avatar: ''
        }
    }
    checkParams = () => {
        let params = this.props.navigation.state.params
        if (params) {
            if (params.userId) {
                this.setState({userId: params.userId})
                this.fetchUserInfo(params.userId)
            }
        }
    }
    fetchUserInfo = (userId) => {
        database.ref('users').child(userId).child('username').once('value').then(snapshot => {
            const exist = snapshot.val() !== null
            if (exist) data = snapshot.val()
            this.setState({username: data})
        }).catch(e => console.log(e)) 
        database.ref('users').child(userId).child('name').once('value').then(snapshot => {
            const exist = snapshot.val() !== null
            if (exist) data = snapshot.val()
            this.setState({name: data})
        }).catch(e => console.log(e)) 
        database.ref('users').child(userId).child('avatar').once('value').then(snapshot => {
            const exist = snapshot.val() !== null
            if (exist) data = snapshot.val()
            this.setState({avatar: data, loaded: true})
        }).catch(e => console.log(e)) 
    }
    componentDidMount() {
        this.checkParams()
    }
    render() {
        return (
            <View style={styles.container}>
                { this.state.loaded ? 
                    (
                        <View style={styles.container}>
                            <View style={styles.headerBarContainer}>
                                <Text>Profile</Text>
                            </View>
                            <View style={styles.headerContainer}>
                                <Image source={{uri: this.state.avatar}} style={styles.avatarImage}/>
                                <View style={styles.nameContainer}>
                                    <Text>{this.state.name}</Text>
                                    <Text>{this.state.username}</Text>
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
                        <View>
                            <Text>Loading ...</Text>
                        </View>
                    )
                }
            </View>
        )
    }
}
export default UserProfileScreen;

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