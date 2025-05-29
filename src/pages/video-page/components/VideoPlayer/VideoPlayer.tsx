import PrimaryButton from "@components/PrimaryButton";
import styles from "./VideoPlayer.module.scss";
import ControlButton from "./components/ControlButton";

const VideoPlayer = () => {
  return (
    <>
      <div className={styles["video-player"]}>
        <div className={styles["video-player__video-container"]}>
          <video
            className={styles["video-player__video"]}
            poster="/img/video-previews/vase.webp"
          />
          <div className={styles["video-player__controls"]}>
            <div className={styles["video-player-controls__times"]}>
              <span className={styles["video-player-controls__current-time"]}>
                01:34
              </span>
              <span className={styles["video-player-controls__duration"]}>
                19:00
              </span>
            </div>
            <div className={styles["video-player-controls__progress-bar"]}>
              <div className={styles["video-player-controls__progress-fill"]} />
            </div>
            <div className={styles["video-player-controls__buttons-container"]}>
              <div
                className={
                  styles["video-player-controls__left-buttons-container"]
                }
              >
                <ControlButton kind="pause" />
                <ControlButton kind="next" />
                <div
                  className={styles["video-player-controls__volume-container"]}
                >
                  <ControlButton kind="volume" />
                  <div className={styles["volume__progress-bar"]}>
                    <div className={styles["volume__progress-fill"]} />
                  </div>
                </div>
              </div>
              <div className={styles["video-player-controls__right-buttons"]}>
                <ControlButton kind="subtitles" />
                <ControlButton kind="settings" />
                <ControlButton kind="size" />
                <ControlButton kind="fullscreen" />
              </div>
            </div>
          </div>
          <div className={styles["video-player__controls--mobile"]}>
            <ControlButton kind="pause" />
            <span>01:34</span>
            <div
              className={styles["video-player-controls__progress-bar--mobile"]}
            >
              <div
                className={
                  styles["video-player-controls__progress-fill--mobile"]
                }
              />
            </div>
            <span>19:00</span>
            <ControlButton kind="volume" />
          </div>
        </div>
        <div className={styles["video-player__description"]}>
          <h1 className={styles["video-player-description__title"]}>
            Dude You Re Getting A Telescope
          </h1>
          <div className={styles["video-player__subtitle-container"]}>
            <p className={styles["video-player-description__subtitle"]}>
              123k views
            </p>
            <div
              className={styles["video-player-description__buttons-container"]}
            >
              <PrimaryButton type="secondary">
                <img src="/img/icons/like.svg" alt="Like icon" />
                <span>123k</span>
              </PrimaryButton>
              <PrimaryButton type="secondary">
                <img src="/img/icons/dislike.svg" alt="Dislike icon" />
                <span>435k</span>
              </PrimaryButton>
              <PrimaryButton type="secondary">
                <img src="/img/icons/share.svg" alt="Share icon" />
                <span>Share</span>
              </PrimaryButton>
              <button
                className={styles["video-player-description__more-button"]}
              >
                <img src="/img/icons/more-horizontal.png" alt="More icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
