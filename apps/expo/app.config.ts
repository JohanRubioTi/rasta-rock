import { ConfigContext, ExpoConfig } from '@expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  extra: {
    eas: {
      projectId: process.env.EXPO_PUBLIC_EAS_PROJECT_ID,
    },
  },
  owner: process.env.EXPO_PUBLIC_EAS_OWNER,
  plugins: ['expo-router'],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  platforms: ['ios', 'android'],
  name: 'RastaRock',
  slug: 'rastarock',
  updates: {
    url: 'https://u.expo.dev/f2775f55-79dd-4eb7-92e8-0d464634791a',
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
})
