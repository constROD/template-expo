# How to manually Build and Release APK for Android

1. Update the correct `.env` for the release.
2. Clean the `.expo` and `android` folder.

```bash
pnpm clean:android
```

3. Build the `android` app.

```bash
pnpm prebuild
```

4. Go to [android/gradle.properties](android/gradle.properties) and add the following:

```gradle
  MYAPP_RELEASE_STORE_FILE=keystore/project-sabong-release-key.keystore
  MYAPP_RELEASE_KEY_ALIAS=project-sabong-key-alias
  MYAPP_RELEASE_STORE_PASSWORD=projectsabong
  MYAPP_RELEASE_KEY_PASSWORD=projectsabong
```

5. Add a `keystore` folder in [android/app](android/app) and add the project's release keystore file in the folder.
6. Go to [android/app/build.gradle](android/app/build.gradle) and update the following:
  
```gradle
  signingConfigs {
      debug {
          storeFile file('debug.keystore')
          storePassword 'android'
          keyAlias 'androiddebugkey'
          keyPassword 'android'
      }
      release {
          storeFile file(MYAPP_RELEASE_STORE_FILE)
          storePassword MYAPP_RELEASE_STORE_PASSWORD
          keyAlias MYAPP_RELEASE_KEY_ALIAS
          keyPassword MYAPP_RELEASE_KEY_PASSWORD
      }
  }
  buildTypes {
      debug {
          signingConfig signingConfigs.debug
      }
      release {
          // Caution! In production, you need to generate your own keystore file.
          // see https://reactnative.dev/docs/signed-apk-android.
          signingConfig signingConfigs.release
          shrinkResources (findProperty('android.enableShrinkResourcesInReleaseBuilds')?.toBoolean() ?: false)
          minifyEnabled enableProguardInReleaseBuilds
          proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
          crunchPngs (findProperty('android.enablePngCrunchInReleaseBuilds')?.toBoolean() ?: true)
      }
  }
```

7. Build the `android` app

```bash
pnpm build:android-release
```

8. The release APK is in here: [android/app/build/outputs/apk/release/app-release.apk](android/app/build/outputs/apk/release/app-release.apk).
