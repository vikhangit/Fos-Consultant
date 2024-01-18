import React from "react";
import MainLayout from "../../components/layout/mainLayout";
import Contact from "./Contact";
import Seo from "../../components/common/seo";

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
      <Contact />
    </MainLayout>
  );
}

export default Index;
