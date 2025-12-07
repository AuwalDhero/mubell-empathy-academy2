import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { APP_NAME } from '../constants';

interface SEOProps {
  title: string;
  description: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title} | {APP_NAME}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | ${APP_NAME}`} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${APP_NAME}`} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;