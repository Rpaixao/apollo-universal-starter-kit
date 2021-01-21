import ClientModule from '@gqlapp/module-client-react-native';
import resources from './locales';

export default new ClientModule({
  localization: [{ ns: 'pagination', resources }]
});
