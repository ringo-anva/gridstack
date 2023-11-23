import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'apps/gridstackmf/remote1',
  exposes: {
    './Routes': 'apps/gridstackmf/remote1/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
