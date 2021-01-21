import React from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import loadable from '@loadable/component';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
import resources from './locales';

const NavLinkWithI18n = translate('pagination')(({ t }: { t: TranslateFunction }) => (
  <NavLink to="/pagination" className="nav-link" activeClassName="active">
    {t('pagination:navLink')}
  </NavLink>
));

export default new ClientModule({
  route: [
    <Route
      exact
      path="/pagination"
      component={loadable(() => import('./containers/Pagination').then(c => c.default))}
    />
  ],
  navItem: [
    <MenuItem key="/pagination">
      <NavLinkWithI18n />
    </MenuItem>
  ],
  localization: [{ ns: 'pagination', resources }]
});
