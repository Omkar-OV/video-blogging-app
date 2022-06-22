import React, { useEffect, useState } from "react";
import { getAllFeeds } from "../utils/fetchData";
import Spinner from "../Componentes/Spinner";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { VideoPin } from ".";

const RecommendedVideos = ({feeds}) => {
  return (
  <SimpleGrid
  minChildWidth="300px"
  spacing="15px"
  width={"full"}
  autoColumns={'max-content'}
  paddingX='2'
  overflow={'hidden'}
>
 {feeds && feeds.map((data) =>(
   <VideoPin key={data.id} maxwidth={420} height='80px' data={data}/>
 ))}
</SimpleGrid>
)
  
}

export default RecommendedVideos