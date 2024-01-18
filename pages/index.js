import React from "react";
import Seo from "../components/common/seo";
import HomePage from "./home/Home";

export default function Home() {
  return (
    <React.Fragment>
      <Seo
        data={{
          title: "",
          description: "",
          url: "",
          thumbnailUrl: "",
        }}
      />
      <HomePage />
    </React.Fragment>
  );
}
