import { Badge } from '@chakra-ui/react';
import React from 'react'
interface Props{
    criticScore: number;
}
const CriticScore = ({criticScore}: Props) => {
  return <Badge colorScheme="green">{criticScore}</Badge>;
}

export default CriticScore