import { IoGameController, IoMusicalNote } from "react-icons/io5";
import { FaSmileWink, FaFilm, FaQq } from "react-icons/fa";
import { GiAngelOutfit } from "react-icons/gi";
import { MdEmojiNature } from "react-icons/md";

export const categories = [
  { id: 1, name: "Games", iconSrc: <IoGameController fontsize={30} /> },
  { id: 2, name: "Funny", iconSrc: <FaSmileWink fontsize={30} /> },
  { id: 3, name: "Stories", iconSrc: <FaQq fontsize={30} /> },
  { id: 4, name: "Movies", iconSrc: <FaFilm fontsize={30} /> },
  { id: 5, name: "Anime", iconSrc: <GiAngelOutfit fontsize={30} /> },
  { id: 6, name: "Music", iconSrc: <IoMusicalNote fontsize={30} /> },
  { id: 7, name: "Nature", iconSrc: <MdEmojiNature fontsize={30} /> }
];
