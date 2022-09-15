import { useMemo, useRef, useState } from "react";
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import {
  Platform as DeviceOS,
  ScrollView
} from "react-native";
import { useGetLessonsQuery } from "../../graphql/generated";
import { EventLogo } from "../../utils/assets/svg/EventLogo";
import { List } from "phosphor-react-native";

import { Video } from "../../components/Video";
import { Sidenav } from "../../components/Sidenav";
import { Footer } from "../../components/Footer";
import { HStack, VStack, Button, useTheme } from "native-base";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import BottomSheet from "@gorhom/bottom-sheet";
import { SimpleGuide } from "../../components/SimpleGuide";

function Platform() {
  const { colors } = useTheme();
  const scrollRef = useRef<any>();

  const bottomsheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [1, '70%'], []);

  const [currentSlug, setCurrentSlug] = useState<string | null>(null); //useState('nlw-return-impulse-stage-01')

  const bottomSheetExpand = () => bottomsheetRef.current?.expand();
  const bottomSheetClose = () => bottomsheetRef.current?.close();

  const { data: lessons, loading: isLoadingLessons } = useGetLessonsQuery();

  return (
    <>
      <HStack
        w="full"
        // pt={DeviceOS.OS === "ios" ? "11" : "10"}
        pt={getStatusBarHeight(true) / 4}
        px={4}
        bg="gray.600"
        justifyContent="space-between"
        alignItems="center"
      >
        <EventLogo width={167} height={24} />

        <Button
          variant="unstyled"
          _text={{
            color: "gray.100",
            fontSize: "sm",
            textTransform: "uppercase",
          }}
          endIcon={
            <List size={32} color="#81D8F7" />
          }
          _pressed={{
            opacity: 0.5,
          }}
          onPress={bottomSheetExpand}
        >
          Aulas
        </Button>

      </HStack>

      <VStack
        flex={1}
        bg="gray.700"
      >
        <ScrollView ref={scrollRef} >
          {
            currentSlug ? <Video lessonSlug={currentSlug} /> : <SimpleGuide />
          }
        </ScrollView>

        <Footer />
        
        <BottomSheet
          ref={bottomsheetRef}
          index={-1}
          snapPoints={snapPoints}
          backgroundStyle={{
            backgroundColor: colors.gray[500],
          }}
          handleStyle={{
            backgroundColor: colors.gray[500],
            // marginHorizontal: 20
          }}
          handleIndicatorStyle={{
            backgroundColor: colors.gray[100],
          }}
          enablePanDownToClose
        >
          <Sidenav
            scrollViewRef={scrollRef}
            lessons={lessons}
            isLoadingLessons={isLoadingLessons}
            onSelectLesson={bottomSheetClose}
            onChangeCurrentSlug={setCurrentSlug}
          />
        </BottomSheet>
      </VStack>
    </>
  );
}

export default gestureHandlerRootHOC(Platform)
