import core from '@gqlapp/core-client-react';
import look from '@gqlapp/look-client-react';
import i18n from '@gqlapp/i18n-client-react';
import validation from '@gqlapp/validation-common-react';
import ClientModule from '@gqlapp/module-client-react';
import defaultRouter from '@gqlapp/router-client-react';
import payments from '@gqlapp/payments-client-react';
import authentication from '@gqlapp/authentication-client-react';
import '@gqlapp/favicon-common';

const post = require('@gqlapp/post-client-react').default;
const pageNotFound = require('@gqlapp/page-not-found-client-react').default;
const pagination = require('@gqlapp/pagination-client-react').default;
const user = require('@gqlapp/user-client-react').default;

const modules = new ClientModule(
  pagination,
  look,
  validation,
  defaultRouter,
  post,
  payments,
  user,
  i18n,
  pageNotFound,
  core,
  authentication
);

export default modules;
