import { useRef, useState, useCallback } from "react"
import { VStack, HStack, Center, Pressable, Text, Image, Heading, Button } from 'native-base'

import * as ExpoVideo from "expo-av"
import YoutubePlayer from "react-native-youtube-iframe";
import { useGetLessonBySlugQuery } from "../../graphql/generated";

import { View, TouchableOpacity, Alert } from "react-native"
import { CaretRight, DiscordLogo, Lightning, FileArrowDown, Image as ImagePhosphor } from "phosphor-react-native";

import { styles } from './styles'
import { Loading } from "../Loading";

interface VideoProps {
    lessonSlug: string;
}

export function Video( props : VideoProps ) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug,
        }
    })

    const [playing, setPlaying] = useState(false);
    
    const onStateChange = useCallback((state: string) => {
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
            <Loading />
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

            <VStack
                flex={1}
                p={6}
                space={5}
            >
                <Heading
                    fontSize={18} 
                    color='gray.100'
                >
                    { data.lesson.title }
                </Heading>

                <Text
                    color='gray.100'
                    fontSize='sm'
                >
                    { data.lesson.description }
                </Text>

                {
                    data.lesson.teacher && (
                        <HStack
                            w='full'
                            justifyContent='flex-start'
                        >
                            <Image 
                                source={{ uri: data.lesson.teacher.avatarURL }}
                                width={63}
                                height={63}
                                rounded='full'
                                borderColor='blue.400'
                                borderWidth={2}
                                alt="Profile Photo"
                            />
                            <VStack
                                flex={1}
                                pl={4}
                                space={2}
                            >
                                <Heading
                                    fontSize={18}
                                    color='gray.100'
                                > 
                                    { data.lesson.teacher.name }
                                </Heading>

                                <Text
                                    fontSize='sm'
                                    color='gray.100'
                                    lineHeight={18}
                                > 
                                    { data.lesson.teacher.bio }
                                </Text>
                            </VStack>
                        </HStack>
                    )
                } 

                <Button
                    bgColor='#00875F'
                    borderColor='#00875F' 
                    height={14}
                    alignItems='center'
                    leftIcon={
                        <DiscordLogo size={24} color={"#FFF"} />
                    }
                    onPress={() => Alert.alert("Hello") }
                    _text={{
                        fontWeight: 'bold'
                    }}
                >
                    COMUNIDADE NO DISCORD
                </Button>

                <Button
                    variant='outline' 
                    height={14}
                    alignItems='center'
                    borderColor='blue.400'
                    leftIcon={
                        <Lightning size={24} color={"#81D8F7"} />
                    }
                    onPress={() => Alert.alert("Hello") }
                    _text={{
                        fontWeight: 'bold',
                        color: 'blue.400'
                    }}
                >
                    ACESSE O DESAFIO
                </Button>

                <TouchableOpacity style={styles.buttonDownloadFiles}>
                    <View style={styles.buttonLeftIcon}>
                        <FileArrowDown size={39} color="#FFF"/>
                    </View>

                    <View style={styles.buttonInfo}>
                        <Text style={styles.buttonInfoTitle}>
                            Material Complementar
                        </Text>
                        <Text style={styles.buttonInfoDescription}>
                            Acesse o material complementar para acelerar o seu desenvolvimento
                        </Text>
                    </View>

                    <View style={styles.buttonRightIcon}>
                        <CaretRight size={24} color="#81D8F7"/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonDownloadFiles, { marginTop: 16 }]}>
                    <View style={styles.buttonLeftIcon}>
                        <ImagePhosphor size={39} color="#FFF"/>
                    </View>

                    <View style={styles.buttonInfo}>
                        <Text style={styles.buttonInfoTitle}>
                            Wallpapers exclusivos
                        </Text>
                        <Text style={styles.buttonInfoDescription}>
                            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                        </Text>
                    </View>

                    <View style={styles.buttonRightIcon}>
                        <CaretRight size={24} color="#81D8F7"/>
                    </View>
                </TouchableOpacity>
            </VStack>
        </>
    )
}