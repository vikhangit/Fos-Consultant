import React from "react";
import MainLayout from "../../../components/layout/mainLayout";
import Business from "./Business";
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
      <Business />
    </MainLayout>
  );
}

export default Index;