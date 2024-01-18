import React from "react";
import Seo from "../../components/common/seo";
import MainLayout from "../../components/layout/mainLayout";
import About from "./About";

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
      <About />
    </MainLayout>
  );
}

export default Index;
