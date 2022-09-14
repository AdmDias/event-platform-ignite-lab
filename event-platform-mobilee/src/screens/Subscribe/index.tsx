import { useState } from "react"
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, TouchableOpacity, ScrollView, Image, ImageBackground, Alert } from "react-native"
import { useCreateSubscriberMutation } from "../../graphql/generated";
import { EventLogo, bgBlur, bgCodeSnippet, reactJSIcon } from '../../utils/assets'
//import SafeAreaView from 'react-native-safe-area-view';
//import AsyncStorage from "@react-native-async-storage/async-storage";

import { setItem } from "../../asyncstorage/storage";
import { Footer } from "../../components/Footer"

import { layout, styles } from './styles'
import { Heading, VStack, Text, Input, Icon, useTheme, Pressable, Button } from "native-base";
import { Envelope, UserCircle } from "phosphor-react-native";

export function Subscribe() {
    const navigation = useNavigation()
    const { colors } = useTheme()
    
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe() {
        await createSubscriber({
            variables: {
                name,
                email
            },
            onCompleted({ createSubscriber }) {
                if (createSubscriber?.id) {
                    setItem('@USERID', createSubscriber.id)
                    navigation.navigate('Platform')
                }
            },
            onError(error) {
                Alert.alert("Erro", error.message)
            },
        })
    }



    return (
        <ScrollView>
            <VStack 
                flex={1}
                bg='gray.700'    
            >
                <ImageBackground source={bgBlur} style={layout.bgImage}>
                    <ImageBackground source={reactJSIcon} style={layout.bgImage}>
                        <VStack
                            w='full'
                            alignItems='center'
                            pt={10}
                            space={2}
                        >
                            <EventLogo />

                            <Text color='gray.100' fontSize='3xl' textAlign='center'>
                                Construa uma {'\n'}
                                <Text color='blue.400' fontSize='3xl' fontWeight='bold'>
                                    aplicação completa {'\n'}
                                </Text>
                                do zero, com <Text color='blue.400' fontWeight='bold'>React JS</Text>
                            </Text>

                            <Text
                                color='gray.200'
                                fontSize='xl'
                                textAlign='center'
                                p={6}
                            >
                                Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e 
                                com alta demanda para acessar as melhores oportunidades do mercado.
                            </Text>

                        </VStack>
                        <VStack
                            bg='gray.700'
                            borderColor='gray.400'
                            borderTopWidth={1}
                            borderBottomWidth={1}
                            py={8}
                            px={7}
                            space={2}
                        >
                            <Heading
                                color='gray.100'
                                fontSize='lg'
                            >
                                Inscreva-se gratuitamente
                            </Heading>

                            <Input
                                py={4}
                                placeholder="Seu nome completo"
                                onChangeText={setName}
                                color='gray.100'
                                size='md'
                                borderWidth={1}
                                borderColor='gray.700'
                                _focus={{
                                    borderColor: '#00B37E',
                                    bg: 'gray.700'
                                }}
                                InputLeftElement={
                                    <Icon
                                        as={
                                            <UserCircle size={24} color={colors.gray[300]} />
                                        }
                                        ml={4}
                                    />
                                }
                            />

                            {/*  
                                CRIAR ESSES INPUTS COMO UM COMPONENT, 
                                AI DA PARA DEIXAR A QUESTAO DO FOCUS DINAMICO, 
                                SEM TER Q DECLARA 'HOVER' STATE PAR CADA INPUT  
                            */}

                            <Input
                                py={4}
                                placeholder="Seu nome completo"
                                onChangeText={setEmail}
                                color='gray.100'
                                size='md'
                                borderWidth={1}
                                borderColor='gray.700'
                                _focus={{
                                    borderColor: '#00B37E',
                                    bg: 'gray.700'
                                }}
                                InputLeftElement={
                                    <Icon
                                        as={
                                            <Envelope size={24} color={colors.gray[300]} />
                                        }
                                        ml={4}
                                    />
                                }
                            />

                            <Button
                                p={4}
                                mt={2}
                                w='full'
                                bg='#00B37E'
                                size='lg'
                                rounded='sm'
                                _pressed={{
                                    bg: '#00B49F'
                                }}
                                onPress={handleSubscribe}
                                _text={{
                                    fontWeight:'bold',
                                    fontSize:'sm',
                                    color:'gray.100'
                                }}
                                isLoading={loading}
                            >
                                GARANTIR MINHA VAGA
                            </Button>
                        </VStack>
                    </ImageBackground>
                    <View style={{ flex: 1, alignItems: "center", marginTop: 16 }}>
                        <Image source={bgCodeSnippet} />
                    </View>
                </ImageBackground>
                <Footer />
            </VStack>
        </ScrollView>

    )
}

