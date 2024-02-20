import { useState, useEffect } from "react";
import { Heading, Center, Text} from '@chakra-ui/react';
import { LaunchItem } from "./components/LaunchItem";
import logo from "./assets/logo.png";
import * as API from "./services/launches";




export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Center>
        <img m={4} src={logo} width={600} />
      </Center>
      <br />
      <Heading as='h1' size='4xl' noOfLines={1} p={1} m={4}>
        Vuelos SpaceX
      </Heading>
      <br />
      <Text as='em' p={1} m={4} >La informacion que se ve en pantalla, es resultado del consumo de una API de SpaceX, que contiene informacion sobre los vuelos realizados por ellos.</Text>
      <section>
        {
          /*Aqui se recorre el array (que viene de la API) y lo mostramos. Con un .map por lo mismo, necesitamos que lo recorra y lo muestre*/
          launches.map((launch) => (
            /*Hay que colocar el Kay para que react reconozca todos los elementos y puedan ser mostramos cuando sea*/
            <LaunchItem key={launch.flight_number}{...launch}/>
          ))
        }
      </section>
    </>
  );
}
