import * as React from "react";
import Helmet from "react-helmet";
import { Header } from "../../components/Header";
import { useTheme } from "react-jss";
import useStyles from './Page.styles';
import { Footer } from "../../components/Footer";
import { RouteComponentProps } from "react-router";

type PageProps = {
  title: string;
  withHeader?: boolean;
  withFooter?: boolean;
  withInnerBlock?: boolean;
};

export const Page: React.FC<PageProps & RouteComponentProps> = ({ title, children, withHeader, withInnerBlock, withFooter, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const renderMain = () => {
    return (
      <main>
        {children}
      </main>
    )
  }
  const renderMainWithInnerBlock = () => {
    return (
      <main className={classes.mainWithInner}>
        <div className={classes.content}>{children}</div>
      </main>
    )
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {withHeader ? <Header {...props}/> : null}
      {withInnerBlock ? renderMainWithInnerBlock() : renderMain()}
      {withFooter ? <Footer /> : null}
    </>
  );
};
