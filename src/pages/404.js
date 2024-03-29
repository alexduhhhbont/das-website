/* eslint-disable linebreak-style */
import * as React from 'react';
import {Link} from 'gatsby';
import BaseLayout from '../layouts/BaseLayout';
import Spacer from '../components/spacer/Spacer';
import { Helmet } from "react-helmet"

// styles
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <BaseLayout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>404 - DAS Eindhoven</title>
    </Helmet>
    <Spacer spacing={4}/>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>  
      <Spacer spacing={4}/>
    </BaseLayout>
  );
};

export default NotFoundPage;
