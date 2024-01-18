import React from "react";
import MainLayout from "../../components/layout/mainLayout";
import WhyUs from "./WhyUs";
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
      <WhyUs />
    </MainLayout>
  );
}

export default Index;
