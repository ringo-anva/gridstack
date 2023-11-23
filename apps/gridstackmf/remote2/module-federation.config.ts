import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'apps/gridstackmf/remote2',
  exposes: {
    './Routes': 'apps/gridstackmf/remote2/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
