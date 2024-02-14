"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import youtubeReq from "../youtube.js";
import Link from "next/link";
export default function Home() {
  const [videos, setVideos] = useState([]);
  console.log("🚀 ~ Home ~ videos:", videos);
  useEffect(() => {
    youtubeReq
      .get("search", { params: { q: "Reactjs courses" } })
      .then((res) => setVideos(res.data.items));
  }, []);

  return (
    <main className={styles.main}>
      <h2>Test Youtube</h2>
      {videos?.map((video) => (
        <Link
          target="_blank"
          href={`https://www.youtube.com/watch?v=${video?.id?.videoId}`}
        >
          {video?.snippet?.title}
        </Link>
      ))}
    </main>
  );
}
