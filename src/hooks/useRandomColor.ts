import { useState } from "react";

export const useRandomColor = () => {
  const [color, setColor] = useState<string | null>(null);
  const [barAndTextWhite, setBarAndTextWhite] = useState<boolean>(false);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;

    if (randomColor.slice(1, 3) === "00") {
      setBarAndTextWhite(true);
    } else {
      setBarAndTextWhite(false);
    }

    setColor(randomColor);
  };

  return {
    color,
    barAndTextWhite,
    generateRandomColor,
  };
};
