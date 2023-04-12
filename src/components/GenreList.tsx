import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCropedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} py={1}>
          <HStack>
            <Image
              src={getCropedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius="6px"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
