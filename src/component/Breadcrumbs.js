import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const Breadcrumbs = React.memo(() => {
  const breadcrumb = useLocation().pathname;

  let paths = breadcrumb.split('/');
  paths = paths[paths.length - 1] === '' ? paths.slice(0, paths.length - 1) : paths;

  paths = paths[1] === '' ? paths.slice(1) : paths;

  const breadcrumbs = paths.map((path, index) => {
    const arrow = index !== paths.length - 1 ? ' > ' : ' ';
    if (paths.length <= 1) {
      return (
        <li className='breadcrumbs-item' key={path}>
          {path === '' && 'Home'}
        </li>
      );
    } else {
      return (
        <li key={path}>
          {paths.length - 1 === index ? (
            <p className='breadcrumbs-text'>{path[0].toUpperCase() + path.slice(1)}</p>
          ) : (
            <NavLink key={index} to={path} activeClassName='active'>
              {path === '' ? 'Home' : `${path}`}
              {arrow}
            </NavLink>
          )}
        </li>
      );
    }
  });
  return (
    <nav>
      <ul className='breadcrumbs color-dark-60'>{breadcrumbs}</ul>
    </nav>
  );
});
