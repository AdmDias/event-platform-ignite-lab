import { useRef, useState } from "react"
import * as ExpoVideo from "expo-av"
import { View, Text, TouchableOpacity, Image, Alert } from "react-native"
import { CaretRight, DiscordLogo, Lightning, FileArrowDown, Image as ImagePhosphor } from "phosphor-react-native";
import { styles } from './styles'

export function Video() {
    const video = useRef(null)

    const [status, setStatus] = useState({})
    return (
        <>
            <View style={{ flex: 1, height: 203 }}>
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
            </View>

            <View style={{ flex: 1, padding: 24 }}>

                <Text style={{ fontSize: 18, color: "#E1E1E6" }}>
                    Aula 01 - Criando o projeto e realizando o setup inicial
                </Text>
                <Text style={{ fontSize: 14, color: "#E1E1E6" }}>
                    Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. 
                    Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL 
                    gerada pela plataforma no nosso front-end utilizando Apollo Client.
                </Text>

                <View style={{ flex: 1, flexDirection: "row", marginTop: 24 }}>
                    <Image 
                        source={{ uri: 'https://github.com/admDias.png' }} 
                        style={{ width: 63, height: 63, borderRadius: 50, borderColor: "#81D8F7", borderWidth: 2, justifyContent: "flex-start" }} 
                    />
                    <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-around", paddingLeft: 18 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#E1E1E6" }}> 
                        Mrs A.B.C 
                    </Text>
                    <Text style={{ fontSize: 14, color: "#E1E1E6" }}> 
                        C.T.O
                    </Text>
                    </View>
                </View>

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