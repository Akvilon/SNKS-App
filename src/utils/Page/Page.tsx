import * as React from "react";
import Helmet from "react-helmet";
import { Header } from "../../components/Header";
import { useTheme } from "react-jss";
import useStyles from './Page.styles';

type PageProps = {
  title: string;
  withHeader?: boolean;
};

export const Page: React.FC<PageProps> = ({ title, children, withHeader }) => {
  const theme = useTheme();
  const classes = useStyles({theme});
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {withHeader ? <Header /> : null}
      <main className={classes.main}>
        {children}
      </main>
    </>
  );
};
