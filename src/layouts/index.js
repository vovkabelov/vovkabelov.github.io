import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css'

const TemplateWrapper = ({ children }) => (
    <div className="container">
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&subset=cyrillic"/>
        </Helmet>
        <main>
            {children()}
        </main>
        <footer>
            <div className="copyright">
                <span>© 2017</span>
            </div>
            <div className="links">
                <a href="mailto:i@vovkabelov.ru" className="mailto">i@vovkabelov.ru</a>
                <a href="https://www.facebook.com/profile.php?id=100000426125978" className="facebook">Facebook</a>
                <a href="https://github.com/vovkabelov" className="github">Github</a>
            </div>
        </footer>
    </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
