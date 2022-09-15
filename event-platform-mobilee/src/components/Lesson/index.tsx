// import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { VStack, HStack, Pressable, IPressableProps, Text, Box } from "native-base";
import { CheckCircle, Lock } from "phosphor-react-native"
import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'

import { styles } from "./styles"

interface LessonProps extends IPressableProps{
    availableAt: Date;
    type: 'live' | 'class';
    title: string;
    slug: string;
    isLessonAvailable: boolean;
}

export function Lesson({ isLessonAvailable, type, availableAt, title, slug, ...props}: LessonProps) {
    
    const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })
    
    const setOpacity = !isLessonAvailable ? 0.5 : 1

    return (
        <Pressable 
            style={{ 
                marginTop: 24, 
                opacity: setOpacity 
            }}
            
            {...props}
        >
            <Text style={styles.releaseDataLesson}>
                { availableDateFormatted }
            </Text>

            <VStack
                w='full'
                mt={2}
                p={4}
                borderColor='gray.400'
                borderWidth={1}
                rounded='sm'
            >
                <HStack 
                    justifyContent='space-between'
                    alignItems='center'
                >
                    { 
                        isLessonAvailable ? (
                            <HStack>
                                <CheckCircle size={20} color={"#81D8F7"}/>
                                <Text style={ [styles.availableLesson, { color: "#81D8F7" }] }>
                                    Conteúdo Liberado
                                </Text>
                            </HStack>
                        ) : (
                            <HStack>
                                <Lock size={20} color={"#FBA94C"}/>
                                <Text style={ [styles.availableLesson, { color: "#FBA94C" }] }>
                                    Em breve
                                </Text>
                            </HStack>
                        )
                    }                  
                    <Box 
                        p={1}
                        alignItems='center'
                        justifyContent='center'
                        borderColor='#00B37E'
                        borderWidth={1}
                        rounded='sm'
                        _text={{
                            fontSize: 'sm', 
                            fontWeight: 'bold', 
                            color: "#00B37E"
                        }}
                    >
                        { type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
                    </Box>
                </HStack>
                <Text style={styles.titleLesson}>
                    { title }
                </Text>
            </VStack>  
        </Pressable>
    )
}