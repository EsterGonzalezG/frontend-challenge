import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
  const location = useLocation();
  const config = {
    home: [{ label: 'Home', path: '/' }],
    details: [{ label: 'Home', path: '/' }, { label: 'Detalle del producto' }],
  };

  function crumb() {
    if (location.pathname === '/') {
      return renderCrumb(config.home);
    } else {
      return renderCrumb(config.details);
    }
  }

  function renderCrumb(option) {
    return option.map((item, index) => {
      return option.length - 1 === index ? (
        <li key={index}>{item.label}</li>
      ) : (
        <li key={index}>
          <Link to={item.path}>{item.label}</Link>
          {' > '}
        </li>
      );
    });
  }

  return (
    <nav>
      <ul>{crumb()}</ul>
    </nav>
  );
};
