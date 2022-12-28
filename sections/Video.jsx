import Image from "next/image";
import React from "react";
import styles from "../styles/Video.module.css";
import player from "../public/Player.png";

function Video() {
  return (
    // <div className={styles["whole-container"]}>
    //   <div className={styles["background-overlay"]}>
    <div className={styles["video_section_container"]}>
      <h3 className={styles["video-title"]}>
        Let’s help you build a brand that customers love and competitors envy
      </h3>
      <div className={styles["video_container"]}>
        <Image src={player} alt="enovate_video" height={564} width={1000} />
      </div>
      {/* </div> */}
    </div>
    //   </div>
    // </div>
  );
}

export default Video;
