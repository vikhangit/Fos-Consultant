import React from "react";
import MainLayout from "../../../components/layout/mainLayout";
import Digital from "./Digital";
import Seo from "../../../components/common/seo";

function Index(props) {
  return (
    <MainLayout>
      <Seo
        data={{
          title: "",
          description: "",
          url: "",
          thumbnailUrl: "",
        }}
      />
      <Digital />
    </MainLayout>
  );
}

export default Index;
