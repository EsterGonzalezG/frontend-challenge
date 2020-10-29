import { Link } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
  const location = useLocation();
  const config = {
    home: [{ label: 'Home', path: '/' }],
    details: [{ label: 'Home', path: '/' }, { label: 'Detalle del producto' }],
  };

  function renderCrumb(option) {
    return option.map((item, index) => {
      return option.length - 1 === index ? (
        <span key={location.key}>{item.label}</span>
      ) : (
        <span>
          <Link to={item.path} key={location.key}>
            {item.label}
          </Link>
          {' > '}
        </span>
      );
    });
  }
  function crumb() {
    if (location.pathname === '/') {
      return renderCrumb(config.home);
    } else {
      return renderCrumb(config.details);
    }
  }
  return <div className='l-marginBottom-24'>{crumb()}</div>;
};
