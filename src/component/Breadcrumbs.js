import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = React.memo(() => {
  const location = useLocation();
  const config = {
    home: [{ label: 'Home', path: '/' }],
    details: [{ label: 'Home', path: '/' }, { label: 'Product details' }],
  };

  function crumb() {
    if (location.pathname === '/') {
      return renderCrumb(config.home);
    } else {
      return renderCrumb(config.details);
    }
  }

  function renderCrumb(option) {
    return option.map(({ label, path }, index) => {
      return option.length - 1 === index ? (
        <li className='breadcrumbs-item' key={index}>
          {label}
        </li>
      ) : (
        <li key={index}>
          <Link to={path} className='breadcrumbs-link'>
            {label}
          </Link>
        </li>
      );
    });
  }

  return (
    <nav>
      <ul className='breadcrumbs color-dark-60'>{crumb()}</ul>
    </nav>
  );
});
