import * as React from "react";
import Helmet from "react-helmet";
import { Header } from "../../components/Header";


type PageProps = {
  title: string;
  withHeader?: boolean;
};

export const Page: React.FC<PageProps> = ({ title, children, withHeader }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {withHeader ? <Header /> : null}
      <main>
        {children}
      </main>
    </>
  );
};
