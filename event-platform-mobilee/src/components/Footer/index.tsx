import { useState, useRef } from "react";
import { Text, HStack, useTheme, Pressable, VStack } from "native-base";
//import { Transition, Transitioning, TransitioningView } from 'react-native-reanimated'
import { PlatformRocketseatLogo } from "../../utils/assets";

// const transition = (
//   <Transition.Sequence>
//     <Transition.In type='fade' durationMs={200} />
//     <Transition.Change/>
//     <Transition.Out type='fade' durationMs={200} />
//   </Transition.Sequence>
// )

export function Footer() {
  //const ref = useRef<TransitioningView>(null)
  const {
    colors: { gray },
  } = useTheme();
  const [toggleFooter, setToggleFooter] = useState(false);

  const toggleFooterTransition = () => {
    //ref.current?.animateNextTransition()
    setToggleFooter(!toggleFooter);
  };

  return (
    // <Transitioning.View
    //   ref={ref}
    //   transition={transition}
    //   style={{
    //     backgroundColor: gray[700]
    //   }}
    // >
    <Pressable
      _pressed={{
        opacity: 0.6,
      }}
      onPress={toggleFooterTransition}
      // style={{
      //   flexGrow: 1
      // }}
    >
      <VStack
        w="full"
        p={4}
        borderColor="gray.400"
        borderTopWidth={1}
        alignItems="center"
        //flexGrow={1}
      >
        <HStack alignItems="center">
          <PlatformRocketseatLogo />
        </HStack>
        {toggleFooter && (
          <>
            <Text fontSize="md" fontWeight="bold" color="gray.250" mt={4}>
              Rocketseat - Todos os direitos reservados
            </Text>
            <Text fontSize="md" fontWeight="bold" color="gray.250" mt={2}>
              Políticas de privacidade
            </Text>
          </>
        )}
      </VStack>
    </Pressable>
    // </Transitioning.View>
  );
}
