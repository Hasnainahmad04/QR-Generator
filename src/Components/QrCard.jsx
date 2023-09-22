import { Card, Typography, Input, Select, Image } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import styles from "./qrCard.module.css";

const QrCard = ({ link, format, onChange, image, onDownload }) => {
  const formats = [
    { label: "Png", value: "png" },
    { label: "Jpeg", value: "jpeg" },
    { label: "Gif", value: "gif" },
    { label: "Svg", value: "svg" },
  ];
  return (
    <Card className={styles.card}>
      <Typography className={styles.title}>QR GENERATOR</Typography>
      <Input
        placeholder="Enter Link"
        className={styles.borderRadius6}
        value={link}
        name="link"
        id="link"
        onChange={(e) => onChange("link", e.target.value)}
      />

      <div className={styles.imageContainer}>
        <Image src={image} className={styles.image} />
      </div>
      <Select
        className={styles.width60}
        placeholder="Select Format"
        value={format}
        onChange={(val) => onChange("format", val)}
        options={formats}
      />
      <button className={styles.downloadBtn} onClick={onDownload}>
        <DownloadOutlined className={styles.downloadIcon} />
      </button>
    </Card>
  );
};

export default QrCard;
