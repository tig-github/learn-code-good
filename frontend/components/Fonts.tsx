import React from "react";
import { Global } from "@emotion/react";

const Fonts = () => {
  return (
    <Global
      styles={`
        @font-face {
            font-family: 'Jetbrains';
            font-style: normal;
            font-weight: 800;
            src: url(/JetBrainsMono-ExtraBold.ttf);
        }`}
    />
  );
};

export default Fonts;
