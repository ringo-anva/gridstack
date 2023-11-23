import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'apps/gridstackmf/shell',
  remotes: ['apps/gridstackmf/remote1', 'apps/gridstackmf/remote2'],
};

export default config;
