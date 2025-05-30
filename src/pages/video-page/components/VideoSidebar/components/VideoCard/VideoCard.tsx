import styles from "./VideoCard.module.scss";

interface VideoCardProps {
  title: string;
  views: string;
  channel: string;
  time: string;
  imgUrl: string;
}

const VideoCard = ({ title, views, channel, time, imgUrl }: VideoCardProps) => {
  return (
    <>
      <div className={styles["video-card"]}>
        <div className={styles["video-card__preview"]}>
          <img
            className="media-fit"
            src={imgUrl}
            alt="Превью видео"
          />
          <div className={styles["video-card__time"]}>{time}</div>
        </div>
        <div className={styles["video-card__info"]}>
          <h3 className={styles["video-card-info__title"]}>{title}</h3>
          <div className={styles["video-card-info__views-container"]}>
            <span>{views}</span>
            <span>{channel}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
