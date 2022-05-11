import React, { useContext } from "react";
import {View,Text,StyleSheet} from 'react-native'
import { Context } from "../context/BlogContext";

const ShowScreen = ({route})=>{

    const {data} = useContext(Context);

    const blogPost = data.find((data)=>data.id === route.params.id)

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

export default ShowScreen