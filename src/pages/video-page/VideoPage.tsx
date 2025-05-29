import styles from "./VideoPage.module.scss";
import ChannelDescription from "./components/ChannelDescription";
import VideoPlayer from "./components/VideoPlayer";
import VideoSidebar from "./components/VideoSidebar";

const VideoPage = () => {
  return (
    <>
    <div className={styles["video-page"]}>
      <div className={styles["video-page__content"]}>
        <VideoPlayer />
        <ChannelDescription />
      </div>
      <VideoSidebar />
    </div>
    </>
  );
};

export default VideoPage;