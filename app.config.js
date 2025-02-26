const IS_PROD = process.env.EXPO_PUBLIC_STAGE === 'prod';

export default {
  expo: {
    name: IS_PROD ? 'Template Expo' : 'Template Expo Dev',
    slug: IS_PROD ? 'template-expo' : 'template-expo-dev',
    scheme: IS_PROD ? 'template-expo' : 'template-expo-dev',
    version: '1.0.0',
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
      bundleIdentifier: 'com.anonymous.templateexpo',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/img/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.anonymous.templateexpo',
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
