import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'e3788158',
  appName: 'apex-mobile',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: 'e3788158',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
