import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, ImageBackground, Alert } from "react-native"
import { EventLogo, bgBlur, bgCodeSnippet, reactJSIcon } from '../../utils/assets'
import { useCreateSubscriberMutation } from "../../graphql/generated";
import { Footer } from "../../components/Footer"
import SafeAreaView from 'react-native-safe-area-view';

import { layout, styles } from './styles'

export function Subscribe({ navigation }: any) {

    const [usernameHover, setUserNameHover] = useState(false)
    const [useremailHover, setUserEmailHover] = useState(false)
    
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe() {

        await createSubscriber({
            variables: {
                name,
                email
            },
            onCompleted(data) {
                if (data) navigation.navigate('Platform')
            },
            onError(error) {
                Alert.alert("Erro", error.message)
            },
        })

        //await new Promise((resolve) => setTimeout((resolve), 2000))
        
    }

    return (
        <SafeAreaView style={layout.safeArea}>
            <ScrollView>
                <View style={layout.container}>
                    <ImageBackground source={bgBlur} style={layout.bgImage}>
                        <ImageBackground source={reactJSIcon} style={layout.bgImage}>
                            <View style={layout.header}>
                                <View style={{ flex: 1, marginTop: 40, marginBottom: 24 }}>
                                    <EventLogo />
                                </View>

                                <Text style={styles.title}>
                                    Construa uma
                                </Text>

                                <Text style={[styles.title, styles.textStrong]}>
                                    aplicação completa
                                </Text>

                                <Text style={styles.title}>
                                    do zero, com <Text style={styles.textStrong}>React JS</Text>
                                </Text>

                                <Text style={styles.description}>
                                    Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e 
                                    com alta demanda para acessar as melhores oportunidades do mercado.
                                </Text>

                            </View>
                            <View style={layout.subscribe_section}>
                                <Text style={{ color: "#E1E1E6", fontWeight: "bold", fontSize: 18, marginBottom: 21 }}>
                                    Inscreva-se gratuitamente
                                </Text>

                                <TextInput 
                                    style={{ ...styles.input, borderColor: usernameHover ? '#00B37E' : '#09090A' }}
                                    textContentType="username"
                                    placeholder="Seu nome completo"
                                    placeholderTextColor="#8D8D99"
                                    onFocus={() => setUserNameHover(true)}
                                    onBlur={() => setUserNameHover(false)}
                                    value={name}
                                    onChangeText={(value) => setName(value)}
                                />

                                {/*  
                                    CRIAR ESSES INPUTS COMO UM COMPONENT, 
                                    AI DA PARA DEIXAR A QUESTAO DO FOCUS DINAMICO, 
                                    SEM TER Q DECLARA 'HOVER' STATE PAR CADA INPUT  
                                */}

                                <TextInput 
                                    style={{ ...styles.input, borderColor: useremailHover ? '#00B37E' : '#09090A' }}
                                    textContentType="emailAddress"
                                    placeholder="Digite seu email"
                                    placeholderTextColor="#8D8D99"
                                    onFocus={() => setUserEmailHover(true)}
                                    onBlur={() => setUserEmailHover(false)}
                                    value={email}
                                    onChangeText={(value) => setEmail(value)}
                                />

                                <TouchableOpacity 
                                    style={styles.btnSubmit}
                                    onPress={handleSubscribe}
                                    disabled={loading}
                                >
                                    <Text style={{ color: "#FFF", fontWeight: "bold" }}>GARANTIR MINHA VAGA</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                        <View style={{ flex: 1, alignItems: "center", marginTop: 16 }}>
                            <Image source={bgCodeSnippet} />
                        </View>
                    </ImageBackground>
                    <Footer />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

