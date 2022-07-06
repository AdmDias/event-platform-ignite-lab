import { View, Text, TouchableOpacity, Alert } from "react-native"
import { CheckCircle, Lock } from "phosphor-react-native"
import { format, isPast } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'

import { styles } from "./styles"

interface LessonProps {
    type: 'live' | 'class';
    availableAt: Date;
    title: string;
    slug: string;
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt)
    
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })
    
    return (
        <TouchableOpacity style={{ marginTop: 24 }}>
            <Text style={styles.releaseDataLesson}>
                { availableDateFormatted }
            </Text>

            <View style={styles.itemLesson}>
                <View style={styles.itemHeader}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        { 
                            isLessonAvailable ? (
                                <>
                                    <CheckCircle size={20} color={"#81D8F7"}/>
                                    <Text style={ [styles.availableLesson, { color: "#81D8F7" }] }>
                                        Conteúdo Liberado
                                    </Text>
                                </>
                            ) : (
                                <>
                                    <Lock size={20} color={"#FBA94C"}/>
                                    <Text style={ [styles.availableLesson, { color: "#FBA94C" }] }>
                                        Em breve
                                    </Text>
                                </>
                            )
                        }                  
                    </View>
                    <View style={styles.typeLesson} >
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#00B37E" }}>
                            { props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
                        </Text>
                    </View>
                </View>
                <Text style={styles.titleLesson}>
                    { props.title }
                </Text>
            </View>  
        </TouchableOpacity>
    )
}