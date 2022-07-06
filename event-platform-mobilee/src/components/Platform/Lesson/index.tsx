import { View, Text, TouchableOpacity, Alert } from "react-native"
import { CheckCircle } from "phosphor-react-native"
import { isPast } from "date-fns";

import { styles } from "./styles"

interface LessonProps {
    type: 'live' | 'class';
    availableAt: Date;
    title: string;
    slug: string;
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt)
    return (
        <TouchableOpacity
            style={{ 
                marginTop: 24, 
                // minHeight: 133,
            }}
            onPress={() => Alert.alert("","Hello")}
        >
            <Text style={styles.releaseData}>
                { props.availableAt.toString() }
            </Text>
            <View style={{ marginTop: 8, padding: 16, borderColor: "#323238", borderWidth: 1, borderRadius: 4 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <CheckCircle size={20} color={"#81D8F7"}/>
                        <Text 
                            style={{ marginLeft: 10, fontSize: 16, fontWeight: "600", color: "#81D8F7" }}
                        >
                            { isLessonAvailable ? 'Conteúdo liberado' : 'Em breve' }
                        </Text>
                    </View>
                    <View style={{ borderRadius: 4, borderWidth: 1, borderColor: "#00B37E", padding: 3, alignItems: "center", justifyContent: "center" }} >
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#00B37E" }}>
                            AO VIVO
                        </Text>
                    </View>
                </View>
                <Text style={{ marginTop: 16, fontSize: 18, fontWeight: "bold", color: "#C4C4CC" }}>
                    { props.title }
                </Text>
            </View>  
        </TouchableOpacity>
        
    )
}