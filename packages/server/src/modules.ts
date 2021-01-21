import pagination from '@gqlapp/pagination-server-ts';
import core from '@gqlapp/core-server-ts';
import i18n from '@gqlapp/i18n-server-ts';
import validation from '@gqlapp/validation-common-react';
import cookies from '@gqlapp/cookies-server-ts';
import post from '@gqlapp/post-server-ts';
import subscription from '@gqlapp/payments-server-ts';
import mailer from '@gqlapp/mailer-server-ts';
import graphqlTypes from '@gqlapp/graphql-types-server-ts';
import authentication from '@gqlapp/authentication-server-ts';
import rest from '@gqlapp/rest-server-ts';
import '@gqlapp/debug-server-ts';

import ServerModule from '@gqlapp/module-server-ts';

const user = require('@gqlapp/user-server-ts').default;

const modules: ServerModule = new ServerModule(
  pagination,
  authentication,
  cookies,
  i18n,
  validation,
  post,
  subscription,
  user,
  mailer,
  rest,
  graphqlTypes,
  core
);

export default modules;
