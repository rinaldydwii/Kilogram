import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from "react-native";
import { f, database } from '../configs/config'

class FeedScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feeds: [],
            refresh: false,
            loading: true
        }
    }
    pluralCheck = (s) => {
        if (s == 1) return ' ago'
        else return 's ago'
    }
    timeConverter = (timestamps) => {
        let a = new Date(timestamps * 1000)
        let seconds = Math.floor((new Date() - a) / 1000)

        let interval = Math.floor(seconds / 31536000)
        if (interval > 1) return interval+' year'+this.pluralCheck(interval)
        interval = Math.floor(seconds / 2592000)
        if (interval > 1) return interval+' month'+this.pluralCheck(interval)
        interval = Math.floor(seconds / 86400)
        if (interval > 1) return interval+' day'+this.pluralCheck(interval)
        interval = Math.floor(seconds / 3600)
        if (interval > 1) return interval+' hour'+this.pluralCheck(interval)
        interval = Math.floor(seconds / 60)
        if (interval > 1) return interval+' minute'+this.pluralCheck(interval)
        return Math.floor(seconds)+' second'+this.pluralCheck(interval)
    }
    loadNew = () => {
        this.setState({refresh: true})
        this.setState({
            feeds: [6, 7, 8, 9, 10, 11],
            refresh: false
        })
    }
    loadFeed = () => {
        this.setState({
            refresh: true,
        })
        database.ref("photos").orderByChild("posted").once("value").then(snapshot => {
            const exist = snapshot.val() !== null

            if (exist) data = snapshot.val()
            let feeds = this.state.feeds

            for (var photo in data) {
                let photoObj = data[photo]
                database.ref("users").child(photoObj.author).child("username").once("value").then(snapshot => {
                    const exist = snapshot.val() !== null
                    if (exist) data = snapshot.val()
                    feeds.push({
                        id: photo,
                        url: photoObj.url,
                        caption: photoObj.caption,
                        posted: this.timeConverter(photoObj.posted),
                        author: data,
                        authorId: photoObj.author
                    })
                    this.setState({
                        refresh: false,
                        loading: false,
                    })
                })
                .catch(e => console.log(e))
            }
        })
        .catch(e => console.log(e))
    }
    componentDidMount() {
        this.loadFeed()
    } 
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerBarContainer}>
                    <Text>Feed</Text>
                </View>
                { this.state.loading ? 
                    (
                        <View style={styles.loadingContainer}>
                            <Text>Loading ...</Text>
                        </View>
                    ) :
                    (
                        <FlatList 
                            refreshing={this.state.refresh}
                            onRefresh={this.loadNew}
                            data={this.state.feeds}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item, index}) => (
                                <View style={styles.feedItemContainer}>
                                    <View style={styles.headerContainer}>
                                        <TouchableOpacity style={styles.usernameText} onPress={() => this.props.navigation.navigate('User', {userId: item.authorId})}>
                                            <Text>{item.author}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <Image
                                            source={{uri: item.url }}
                                            style={styles.feedImage}
                                        />
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <Text style={styles.captionText}>{item.caption}</Text>
                                        <Text>Comments</Text>
                                        <Text style={styles.publishDateTimeText}>{item.posted.toUpperCase()}</Text>
                                    </View>

                                </View>
                            )}
                        />
                    )
                }
            </View>
        );
    }
}
export default FeedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadingContainer: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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