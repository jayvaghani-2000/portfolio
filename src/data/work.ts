import METAVERSE from "@/assets/posters/metaverse.png";
import TIXID from "@/assets/posters/tixId.png";
import MINTY from "@/assets/posters/minty.png";
import AIRBNB from "@/assets/posters/airbnb.png";
import MOVIEBOX from "@/assets/posters/movieBox.png";
const Data = [
  {
    _id: 1,
    name: "Tix ID",
    link: "https://tix-id.vercel.app/login",
    date: "2022-05-24T11:23:38.543Z",
    tags: ["React", "Nextjs", "Redux", "NextAuth", "MUI"],
    poster: TIXID,
  },
  {
    _id: 2,
    name: "Minty",
    link: "http://minty-peach.vercel.app/",
    date: "2022-05-18T11:23:38.543Z",
    tags: ["Javascript Vanilla", "SCSS", "Parcel"],
    poster: MINTY,
  },

  {
    _id: 3,
    name: "MetaVerse",
    link: "https://meta-verse-gamma.vercel.app/",
    date: "2023-10-07T11:23:38.543Z",
    tags: ["React", "Nextjs", "FRAMER MOTION"],
    poster: METAVERSE,
  },

  {
    _id: 4,
    name: "Airbnb Clone",
    link: "https://airbnb-clone-site-mu.vercel.app/",
    date: "2023-10-16T11:23:38.543Z",
    tags: [
      "Nextjs-13",
      "MongoDB",
      "NextAuth",
      "Zustand",
      "Tailwind",
      "Typescript",
    ],
    poster: AIRBNB,
  },
  {
    _id: 5,
    name: "MovieBox",
    link: "https://movieboxes.vercel.app/movie/753342",
    date: "2023-10-16T11:23:38.543Z",
    tags: [
      "Nextjs-13",
      "TMDB-api",
      "Zustand",
      "Tailwind",
      "Typescript",
      "Clerk Auth",
    ],
    poster: MOVIEBOX,
  },
];

export default Data;
