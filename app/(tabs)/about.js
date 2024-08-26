import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
// import { HomeIcon } from "../components/Icons";

import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className={`active:opacity-80`}>
            {/* <HomeIcon /> */}
          </StyledPressable>
        </Link>

        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Este proyecto fue creado con el fin de aprender a usar Expo y React
          Native para crear aplicaciones móviles multiplataforma. La aplicación
          es un clon de la página metacritic.com, la cual es una página que
          recopila reseñas de videojuegos y películas de diferentes medios y las
          promedia para darles una calificación general.
        </Text>

        <Text className="text-white text-white/90 mb-4">
          La aplicación cuenta con una serie de videojuegos y películas, los
          cuales se pueden ver en la pantalla principal. Al hacer clic en uno de
          ellos, se puede ver una descripción más detallada del videojuego o
          película, así como su calificación general
        </Text>
      </ScrollView>
    </Screen>
  );
}
