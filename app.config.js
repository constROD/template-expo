const { version } = require('./package.json');

const IS_PROD = process.env.EXPO_PUBLIC_STAGE === 'prod';
const APP_NAME = process.env.EXPO_PUBLIC_APP_NAME;

const appBundleName = APP_NAME;

const appNameWithHyphens = formatAppName({
  name: appBundleName,
  hasHyphens: true,
});
const appNameWithoutHyphens = formatAppName({
  name: appBundleName,
  hasHyphens: false,
});

const bundleIdentifierOrPackage = IS_PROD
  ? `com.${appNameWithoutHyphens}.prod`
  : `com.${appNameWithoutHyphens}.dev`;

export default {
  expo: {
    name: IS_PROD ? appBundleName : `${appBundleName} (Dev)`,
    slug: IS_PROD ? `${appNameWithHyphens}` : `${appNameWithHyphens}-dev`,
    scheme: IS_PROD ? `${appNameWithHyphens}` : `${appNameWithHyphens}-dev`,
    version,
    orientation: 'portrait',
    icon: './src/assets/img/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './src/assets/img/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: bundleIdentifierOrPackage,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/img/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: bundleIdentifierOrPackage,
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './src/assets/img/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-build-properties',
        {
          ios: {
            newArchEnabled: true,
          },
          android: {
            newArchEnabled: true,
          },
        },
      ],
      [
        'expo-font',
        {
          fonts: [
            'node_modules/@expo-google-fonts/poppins/Poppins_400Regular.ttf',
            'node_modules/@expo-google-fonts/poppins/Poppins_500Medium.ttf',
            'node_modules/@expo-google-fonts/poppins/Poppins_600SemiBold.ttf',
            'node_modules/@expo-google-fonts/poppins/Poppins_700Bold.ttf',
          ],
        },
      ],
      [
        'expo-camera',
        {
          cameraPermission: 'Allow $(PRODUCT_NAME) to access your camera',
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  },
};

function formatAppName({ name, hasHyphens }) {
  const formatted = name?.toLowerCase();
  return hasHyphens
    ? formatted?.replace(/\s+/g, '-')
    : formatted?.replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
}
