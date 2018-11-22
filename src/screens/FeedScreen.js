import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, FlatList } from "react-native";

class FeedScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feeds: [0, 1, 2, 3, 4, 5],
            refresh: false
        }
    }
    loadNew = () => {
        this.setState({refresh: true})
        this.setState({
            feeds: [6, 7, 8, 9, 10, 11],
            refresh: false
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerBarContainer}>
                    <Text>Feed</Text>
                </View>
                <FlatList 
                    refreshing={this.state.refresh}
                    onRefresh={this.loadNew}
                    data={this.state.feeds}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <View style={styles.feedItemContainer}>
                            <View style={styles.headerContainer}>
                                <Text style={styles.usernameText}>Username</Text>
                            </View>
                            <View>
                                <Image
                                    source={{uri: 'https://source.unsplash.com/random/500x'+Math.floor(Math.random()*800) + 500 }}
                                    style={styles.feedImage}
                                />
                            </View>
                            <View style={styles.footerContainer}>
                                <Text style={styles.captionText}>Caption</Text>
                                <Text>Comments</Text>
                                <Text style={styles.publishDateTimeText}>{"Time ago".toUpperCase()}</Text>
                            </View>

                        </View>
                    )}
                />
                    
            </View>
        );
    }
}
export default FeedScreen;

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
    feedItemContainer: {
        width: '100%',
    },
    headerContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    footerContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    feedImage: {
        resizeMode: "cover",
        width: '100%',
        height: Dimensions.get('window').width
    },
    usernameText: {
        fontWeight: "bold"
    },
    captionText: {
        marginBottom: 5
    },
    publishDateTimeText: {
        fontSize: 10,
        color: "grey",
        marginTop: 5
    }
});