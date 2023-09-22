import { saveAs } from "file-saver";
import { useEffect, useState } from "react";
import "./index.css";
import QrCard from "./Components/QrCard";
import useValueChange from "./hooks/useValueChange";

const App = () => {
  const [qrCode, setQrCode] = useState("");
  const { format, link, handleChange } = useValueChange();

  const getImage = async () => {
    try {
      const qrLink = link || "https://github.com/Hasnainahmad04";
      const resp = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=500x500&bgcolor=6e7e85&color=fff&format=${format}&qzone=10&data=${qrLink}`
      );
      const imageBlob = await resp.blob();
      const imageObject = URL.createObjectURL(imageBlob);
      setQrCode(imageObject);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handleDownload = () => {
    saveAs(qrCode, `QrCode.${format}`);
  };

  useEffect(() => {
    getImage();
  }, [link, format]);

  return (
    <main className="main">
      <QrCard
        format={format}
        link={link}
        image={qrCode}
        onDownload={handleDownload}
        onChange={handleChange}
      />
    </main>
  );
};

export default App;
