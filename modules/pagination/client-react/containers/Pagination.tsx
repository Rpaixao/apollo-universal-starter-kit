import React from 'react';

import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import PaginationView from '../components/PaginationView';

interface PaginationProps {
  t: TranslateFunction;
}

class Pagination extends React.Component<PaginationProps> {
  public render() {
    return <PaginationView {...this.props} />;
  }
}

export default translate('pagination')(Pagination);
