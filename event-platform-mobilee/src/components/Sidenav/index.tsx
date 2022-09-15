//import { View, Text } from "react-native"
import { VStack, Text, Heading, Divider } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { GetLessonsQuery } from "../../graphql/generated"
import { isPast } from "date-fns";
import { Lesson } from "../Lesson"
import { styles } from "./styles"


interface SidenavProps {
    scrollViewRef: any;
    lessons: GetLessonsQuery | undefined;
    isLoadingLessons: boolean;
    onSelectLesson: () => void | undefined;
    onChangeCurrentSlug: (slug: string) => void;
}

export function Sidenav({ 
    scrollViewRef, 
    lessons,
    isLoadingLessons,
    onSelectLesson, 
    onChangeCurrentSlug 
} : SidenavProps) {

    return (
        <VStack 
            p={6}
            bg='gray.500'
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    isLoadingLessons ? (
                        <Text style={styles.title}> Carregando... </Text>
                    ):(
                        <>
                            <Heading
                                color='white'
                            >
                                Cronograma de aulas
                            </Heading>

                            <Divider mt={6} color='gray.500' />

                            {
                                lessons?.lessons.map((lesson) => {
                                    const isLessonAvailable = isPast(new Date(lesson.availableAt))
                                    return (
                                        <Lesson 
                                            key={lesson.id}
                                            title={lesson.title}
                                            availableAt={new Date(lesson.availableAt)}
                                            type={lesson.lessonType}
                                            slug={lesson.slug}
                                            isLessonAvailable={isLessonAvailable}
                                            disabled={!isLessonAvailable}
                                            _pressed={{
                                                opacity: 0.5
                                            }}
                                            onPress={() => {
                                                onChangeCurrentSlug(lesson.slug)
                                                onSelectLesson()
                                                scrollViewRef.current.scrollTo({ y: 0, animated: true });
                                            }}
                                        />
                                    )
                                })
                            }
                        </>
                    )
                }
            </ScrollView>
        </VStack>
    )
}