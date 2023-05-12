import styles from "./index.module.scss";

export type ImageHeroProps = {
  imageUrl: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function ImageHero ({
  imageUrl,
  title,
  subtitle,
  className,
}: ImageHeroProps) {
  return (
    <div className={`${styles.hero} ${className}`}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};
