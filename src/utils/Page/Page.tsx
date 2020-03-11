import * as React from "react";
import Helmet from "react-helmet";
import { Header } from "../../components/Header";


type PageProps = {
  title: string;
};

export const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>
          {children}
      </main>
    </>
  );
};
