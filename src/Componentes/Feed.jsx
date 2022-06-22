import React, { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";

import { firebaseApp } from "../firebase-config";
import { categoryFeeds, getAllFeeds } from "../utils/fetchData";
import Spinner from "../Componentes/Spinner";
import { SimpleGrid } from "@chakra-ui/react";
import { VideoPin } from ".";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const Feed = () => {
  const { categoryId } = useParams();
  // firestore database instance
  const firestoreDb = getFirestore(firebaseApp);

  const [feeds, setFeeds] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      categoryFeeds(firestoreDb, categoryId).then((data) => {
        setFeeds(data);
        setLoading(false);
      });
    } else {
      getAllFeeds(firestoreDb).then((data) => {
        setFeeds(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading) return <Spinner msg={"Loding your Feeds"} />;
  if (!feeds?.length > 0) return <NotFound />;

  return (
    <SimpleGrid
      minChildWidth="300px"
      spacing="15px"
      width={"full"}
      autoColumns={"max-content"}
      paddingX="2"
      overflowX={"hidden"}
    >
      {feeds &&
        feeds.map((data) => (
          <VideoPin key={data.id} maxwidth={420} height="80px" data={data} />
        ))}
    </SimpleGrid>
  );
};

export default Feed;
