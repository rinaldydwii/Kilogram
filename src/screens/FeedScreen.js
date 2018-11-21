import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from "react-native";

class FeedScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text>Feed</Text>
                </View>
                <ScrollView>
                    <View>
                        <View>
                            <Text>Username</Text>
                        </View>
                        <View>
                            <Image
                                source={{uri: 'https://source.unsplash.com/random/500x'+Math.floor(Math.random()*800) + 500 }}
                                style={styles.feedImage}
                            />
                        </View>
                        <View>
                            <Text>Caption</Text>
                            <Text>Comments</Text>
                            <Text>Time ago</Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default FeedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        height: 70,
        paddingTop: 20,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#DFDFDF",
        borderBottomWidth: 1
    },
    feedImage: {
        resizeMode: "cover",
        width: '100%',
        height: Dimensions.get('window').width
    }
});