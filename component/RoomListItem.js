import {Image, Text, View} from 'react-native';
import React, {PureComponent} from 'react';
import color from './../lib/color';
import font from './../lib/font';
import {LineItem} from './LineItem';
import moment from "moment";

export class RoomListItem extends PureComponent {
    render() {
        let {item} = this.props
        let unread_comments = item.count_notif > 0

        return (
            <>
                <View style={style.item}>
                    <Image source={{uri: item.avatar}} style={style.avatar}/>
                    <View style={{flex: 1}}>
                        <View style={style.item20}>
                            <View style={style.item2}>
                                <Text style={style.title}>{item.name}</Text>
                                <View style={style.item11}>
                                    {/*<Image source={require('./../src/image/camera.png')} style={style.iconMessage}/>*/}
                                    <Text style={style.message}>{item.last_comment_message}</Text>
                                </View>
                            </View>
                            <View>
                                <Text
                                    style={unread_comments ? style.timeUnread : style.time}>{moment(item.last_comment_message_created_at).format('MM/DD/YY')}</Text>
                                <View style={style.item32}>
                                    {unread_comments && <Text style={style.unread}>{item.count_notif}</Text>}
                                </View>
                            </View>
                        </View>
                        <LineItem/>

                    </View>
                </View>
            </>
        );
    }
}

const style = {
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: color.white,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        height: 65,
        alignItems: 'center',
    },
    item11: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    item20: {
        flexDirection: 'row',
        alignItems: "center",
        flex: 1,
    },
    item2: {
        flex: 1,
        paddingLeft: 10,
    },
    item32: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    title: {
        color: color.black,
        fontSize: font.font2,
    },
    message: {
        fontSize: font.font1,
        color: color.gray,
    },
    time: {
        fontSize: font.font1,
        color: color.gray,
    },
    timeUnread: {
        fontSize: font.font1,
        color: color.green,
    },
    unread: {
        fontSize: font.font1,
        color: color.white,
        backgroundColor: color.green,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 100,
        marginTop: 3,
    },
    iconMessage: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
};
export default RoomListItem;
