import { View, Text, ScrollView } from "react-native"
import { useGetLessonsQuery } from "../../graphql/generated"
import { Lesson } from "../Lesson"
import { styles } from "./styles"


interface SidenavProps {
    onChangeCurrentSlug: (slug: string) => void;
}

export function Sidenav({ onChangeCurrentSlug } : SidenavProps) {

    const { data, loading } = useGetLessonsQuery()

    return (
        <View style={styles.sidenav}>
            <ScrollView nestedScrollEnabled>
                {
                    loading ? (
                        <Text style={styles.title}> Carregando... </Text>
                    ):(
                        <>
                            <Text style={styles.title}>
                                Cronograma de aulas
                            </Text>

                            <View style={styles.lessonsContainer}/> 
                            {
                                data?.lessons.map((lesson) => {
                                    return (
                                        <Lesson 
                                            key={lesson.id}
                                            title={lesson.title}
                                            availableAt={new Date(lesson.availableAt)}
                                            type={lesson.lessonType}
                                            slug={lesson.slug}
                                            //updateSlug={onChangeCurrentSlug}
                                            onPress={() => onChangeCurrentSlug(lesson.slug)}
                                        />
                                    )
                                })
                            }
                        </>
                    )
                }
            </ScrollView>
        </View>
    )
}