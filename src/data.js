import { v4 as uuidv4 } from "uuid";
import audio from "./assets/hari.mp3";
// import anthaGudu from "./assets/anthaGudu.mp3";
import BigDawgs from "./assets/BigDawgs.mp3";

function chillHop() {
  return [
    {
      name: "Big Dawgs",
      cover: "https://pagal-world.com.in/siteuploads/thumb/sft4/1634_4.jpg",
      artist: "Hanumankind",
      audio: BigDawgs,
      color: ["#c59173", "#cd9d89"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hariloranga Hari ",
      cover: "https://wallpapercave.com/wpt/wp6216884.jpg",
      artist: " Nagur Babu, Ranjith Govind",
      audio: audio,
      color: ["#0771b1", "#7fb9e3"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Keep Going",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/0e/a0/ab/0ea0ab75-4565-2076-ff2a-e29747f12e19/4251804154369_3000.jpg/300x300bb.webp",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#55613f", "#f67b82"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/77/7a/41/777a4142-983d-78db-0418-f20bd008e70c/3663663010556.jpg/316x316bb.webp",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#da650b", "#ab3607"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/14/d7/23/14d72388-5532-77f4-5983-82610845caff/artwork.jpg/316x316bb.webp",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#5b92cb", "#d5dee3"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/77/f8/71/77f87112-919d-ffb8-4728-ae0481297d61/859745772808_cover.jpg/316x316bb.webp",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
