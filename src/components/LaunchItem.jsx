import dayjs from "dayjs";
import "dayjs/locale/es";
import { HiCalendar } from "react-icons/hi";
import { Box, Text, Flex, Spacer, Tag, Button, Icon } from '@chakra-ui/react';


export function LaunchItem(launch){
    return(
        <Box 
              bg="gray.100"
              p={4}
              m={4}
              borderRadius="lg"
            >
              <Flex>
                <Text fontSize="2xl">
                  Mision <strong>{launch.mission_name}</strong> (
                  {launch.launch_year})
                </Text>
                <Spacer />
                <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                  {launch.launch_success ? "Exitoso" : "Fallido"}
                </Tag>
              </Flex>
              <Flex align="center">{" "}
                <Icon as={HiCalendar} color="gray.500" />
                <Text fontSize="sm" ml={1} color="gray.500">
                  {dayjs(launch.launch_date_local)
                    .locale("es")
                    .format("D MMMM, YYYY")}
                </Text>
              </Flex>
              <Button mt={2} colorScheme="blue">Detalles</Button>
            </Box>
    )
}