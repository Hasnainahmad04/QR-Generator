import { useState } from "react";

const useValueChange = () => {
  const [{ link, format }, setValue] = useState({
    link: "",
    format: "png",
  });

  const onChange = (key, val) => setValue((prev) => ({ ...prev, [key]: val }));

  return { link, format, handleChange: onChange };
};

export default useValueChange;
