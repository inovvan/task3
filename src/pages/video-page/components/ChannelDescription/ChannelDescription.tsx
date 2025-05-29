import PrimaryButton from "@components/PrimaryButton";
import styles from "./ChannelDescription.module.scss";

const ChannelDescription = () => {
  return (
    <>
      <div className={styles["channel-description"]}>
          <div className={styles["channel-description__avatar"]}>
            <img
              className="media-fit"
              src="/img/video-previews/orange.webp"
              alt="Channel Avatar"
            />
          </div>
          <div className={styles["channel-description__details"]}>
            <h2 className={styles["channel-description__title"]}>
              Food & Drink
            </h2>
            <div className={styles["channel-description__subtitle-container"]}>
               <p className={styles["channel-description__subtitle"]}>
                Published on 14 Jun 2019
              </p>
              <p className={styles["channel-description__subtitle--mobile"]}>
                2.3m subscribed
              </p>
              <PrimaryButton type="primary">Subscribe 2.3m</PrimaryButton>
            </div>
            <p className={styles["channel-description__text"]}>
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy; it is based on
              a number of factors, including ad placement, demographic, even the
              consumer’s mood when they see your ad.
            </p>
            <button>
              <span className={styles["channel-description__show-more-button"]}>
                Show more
              </span>
            </button>
         
          </div>
          <button className={styles["channel-description__button--mobile"]}>
            Subscribe
          </button>
      </div>
    </>
  );
};

export default ChannelDescription;
