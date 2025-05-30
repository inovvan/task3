import styles from "./VideoSidebar.module.scss";
import VideoCard from "./components/VideoCard";
import { videoCards } from "./data";

const VideoSidebar = () => {
  return (
    <>
      <div className={styles["video-sidebar"]}>
        <div className={styles["video-sidebar__header"]}>
          <h2 className={styles["video-sidebar__title"]}>Next</h2>
          <label className={styles["video-sidebar__switch"]}>
            <input type="checkbox" />
            <span>AUTOPLAY</span>
            <div className={styles["video-sidebar__slider"]} />
          </label>
        </div>
        <div className={styles["video-sidebar__video-list"]}>
          {videoCards.map((card) => (
            <VideoCard
              key={card.title}
              title={card.title}
              views={card.views}
              channel={card.channel}
              time={card.time}
              imgUrl={card.imgUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoSidebar;
