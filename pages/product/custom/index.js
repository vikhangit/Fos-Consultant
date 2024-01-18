import React from "react";
import MainLayout from "../../../components/layout/mainLayout";
import Custom from "./Custom";
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
      <Custom />
    </MainLayout>
  );
}

export default Index;
