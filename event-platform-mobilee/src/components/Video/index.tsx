import { useRef, useState, useCallback } from "react"

import * as ExpoVideo from "expo-av"
import YoutubePlayer from "react-native-youtube-iframe";
import { useGetLessonBySlugQuery } from "../../graphql/generated";

import { View, Text, TouchableOpacity, Image, Alert } from "react-native"
import { CaretRight, DiscordLogo, Lightning, FileArrowDown, Image as ImagePhosphor } from "phosphor-react-native";

import { styles } from './styles'

interface VideoProps {
    lessonSlug: string;
}

export function Video( props : VideoProps ) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: "nlw-return-impulse-stage-04",
        }
    })

    const [playing, setPlaying] = useState(false);
    
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);
    
    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);
    
    const video = useRef(null)
    const [status, setStatus] = useState({})
    
    if (!data || !data.lesson){
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#E1E1E6"}}>Carregando...</Text>
            </View>
        )
    }

    return (
        <>
            <View style={{ flex: 1, height: 270 }}>
                {
                    data.lesson.videoId != null ? (
                        <View>
                            <YoutubePlayer 
                                height={270}
                                // play={playing}
                                videoId={data.lesson.videoId}
                                onChangeState={onStateChange}
                            />
                        </View>
                    ): (
                        <ExpoVideo.Video 
                            ref={video}
                            style={styles.video}
                            source={{ uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
                            useNativeControls
                            isLooping
                            resizeMode={ExpoVideo.ResizeMode.CONTAIN}
                            onPlaybackStatusUpdate={(status) => {
                            setStatus(status)
                            }}
                        />
                    )

                }
            </View>

            <View style={styles.content}>
                <Text style={styles.lessonTitle}>
                    { data.lesson.title }
                </Text>

                <Text style={styles.lessonDescription}>
                    { data.lesson.description }
                </Text>

                {
                    data.lesson.teacher && (
                        <View style={styles.teacherInfo}>
                            <Image 
                                style={styles.teacherAvatar} 
                                source={{ uri: data.lesson.teacher.avatarURL }} 
                            />
                            <View style={styles.teacher}>
                                <Text style={styles.teacherName}> 
                                    { data.lesson.teacher.name }
                                </Text>
                                <Text style={styles.teacherBiography}> 
                                    { data.lesson.teacher.bio }
                                </Text>
                            </View>
                        </View>
                    )
                }

                

                <TouchableOpacity 
                    style={[styles.button, styles.primary]}
                    onPress={() => Alert.alert("Hello") }
                >
                    <DiscordLogo size={24} color={"#FFF"} />
                    <Text style={{ marginLeft: 10, color: "#FFF", fontWeight: "bold" }}>COMUNIDADE NO DISCORD</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, styles.secondary]}
                    onPress={() => Alert.alert("", "Hello") }
                >
                    <Lightning size={24} color={"#81D8F7"} />
                    <Text style={{ marginLeft: 10, color: "#81D8F7", fontWeight: "bold" }}>ACESSE O DESAFIO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, marginTop: 64 }}>
                    <View style={{ flex: 1, flexDirection: "row", minHeight: 140 }}>

                    <View style={{ paddingRight: 23, paddingLeft: 23, backgroundColor: "#015F43", justifyContent: "center" }}>
                        <FileArrowDown size={39} color="#FFF"/>
                    </View>

                    <View style={{ flex: 1, flexDirection: "column", padding: 16, justifyContent: "space-around" }}>
                        <Text 
                            style={{ fontSize: 22, fontWeight: "bold", color: "#E1E1E6" }}
                        >
                            Material Complementar
                        </Text>
                        <Text
                            style={{ fontSize: 16, color: "#E1E1E6" }}
                        >
                            Acesse o material complementar para acelerar o seu desenvolvimento
                        </Text>
                    </View>

                    <View style={{ paddingRight: 23, paddingLeft: 23, justifyContent: "center" }}>
                        <CaretRight size={24} color="#81D8F7"/>
                    </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, marginTop: 16 }}>
                    <View style={{ flex: 1, flexDirection: "row", minHeight: 140 }}>

                    <View style={{ paddingRight: 23, paddingLeft: 23, backgroundColor: "#015F43", justifyContent: "center" }}>
                        <ImagePhosphor size={39} color="#FFF"/>
                    </View>

                    <View style={{ flex: 1, flexDirection: "column", padding: 16, justifyContent: "space-around" }}>
                        <Text 
                            style={{ fontSize: 22, fontWeight: "bold", color: "#E1E1E6" }}
                        >
                            Wallpapers exclusivos
                        </Text>
                        <Text
                            style={{ fontSize: 16, color: "#E1E1E6" }}
                        >
                            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                        </Text>
                    </View>

                    <View style={{ paddingRight: 23, paddingLeft: 23, justifyContent: "center" }}>
                        <CaretRight size={24} color="#81D8F7"/>
                    </View>

                    </View>
                </TouchableOpacity>

            </View>
        </>
    )
}