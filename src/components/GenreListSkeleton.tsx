import {
  Box,
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} py={2}>
          <HStack>
            <Skeleton width="40px" height="32px" borderRadius="6px" />
            <SkeletonText width="100%" noOfLines={2} spacing="2" skeletonHeight="2" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
