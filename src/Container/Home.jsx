import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Category,
  Create,
  Feed,
  NavBar,
  Search,
  UserProfile,
  VideoPin,
  VideoPinDetail,
} from "../Componentes";
import { categories } from "../Data";

const Home = ({ user }) => {
  return (
    <>
      <NavBar user={user} />

      <Flex width={"100vw"}>
        <Flex
          direction={"column"}
          justifyContent="start"
          alignItems={"center"}
          width="5%"
        >
          {categories &&
            categories.map((data) => <Category key={data.id} data={data} />)}
        </Flex>
        <Flex
          width={"95%"}
          px={4}
          justifyContent="center"
          alignItems={"center"}
          paddingX={4}
        >
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/category/:categoryId" element={<Feed />} />
            <Route path="/create" element={<Create />} />
            <Route path="/videoDetail/:vedioId" element={<VideoPinDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/userDetail/:userId" element={<UserProfile/>}/>
          </Routes>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
