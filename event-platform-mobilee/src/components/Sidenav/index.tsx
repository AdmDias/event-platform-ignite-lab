import { View, Text, ScrollView } from "react-native"
import { GetLessonsQuery } from "../../graphql/generated"
import { isPast } from "date-fns";
import { Lesson } from "../Lesson"
import { styles } from "./styles"


interface SidenavProps {
    scrollViewRef: any;
    isSideNavOpen: boolean;
    lessons: GetLessonsQuery | undefined;
    isLoadingLessons: boolean;
    onOpenSideNav: (display: boolean) => void;
    onChangeCurrentSlug: (slug: string) => void;
}

export function Sidenav({ 
    isSideNavOpen, 
    scrollViewRef, 
    lessons,
    isLoadingLessons,
    onOpenSideNav, 
    onChangeCurrentSlug 
} : SidenavProps) {

    const setDisplay = isSideNavOpen ? 'flex' : 'none'

    return (
        <View style={[styles.sidenav, { display: setDisplay } ]}>
            <ScrollView nestedScrollEnabled>
                {
                    isLoadingLessons ? (
                        <Text style={styles.title}> Carregando... </Text>
                    ):(
                        <>
                            <Text style={styles.title}>
                                Cronograma de aulas
                            </Text>

                            <View style={styles.lessonsContainer}/> 
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
                                            onPress={() => {
                                                onChangeCurrentSlug(lesson.slug)
                                                onOpenSideNav(false)
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
        </View>
    )
}