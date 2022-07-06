import { View, Text, ScrollView } from "react-native"
import { Lesson } from "../Platform/Lesson"
import { gql, useQuery } from "@apollo/client"
import { styles } from "./styles"

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            availableAt
            title 
            slug
        }
    }
`

interface GetLessonsQueryResponse {
    lessons: {
        id: string;
        lessonType: 'live' | 'class';
        availableAt: string;
        title: string;
        slug: string;
    }[]
}

export function Sidenav() {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
    return (
        <View 
            style={{ 
                position: "absolute", 
                width: "100%", 
                height: "100%",
                padding: 24, 
                zIndex: 2, 
                backgroundColor: "#09090A", 
        }}>
            <ScrollView nestedScrollEnabled>
                <Text style={styles.title}>
                    Cronograma de aulas
                </Text>
                <View
                    style={{ marginTop: 24, borderBottomColor: '#323238', borderBottomWidth: 1 }}
                /> 
                {
                    data?.lessons.map((lesson) => {
                        return (
                            <Lesson 
                                key={lesson.id}
                                title={lesson.title}
                                availableAt={new Date(lesson.availableAt)}
                                type={lesson.lessonType}
                                slug={lesson.slug}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}