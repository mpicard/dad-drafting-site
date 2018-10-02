import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Compass Millwork Drawings provides high quality CAD drawings ' +
                'for millworks. With over 20 years of experience in the ' +
                'millwork industry, CMD provides expert drawing services ' +
                'in Northern Ontario.'
            },
            {
              name: 'keywords',
              content:
                'compass, millwork, drawing, drafting, design, northern ontario' +
                ', ontario, canada, north bay, CAD, AutoCAD, Solidworks'
            }
          ]}>
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="container flex flex-col mx-auto pt-24">{children}</div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
