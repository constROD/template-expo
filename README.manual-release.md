# How to Manually Build and Release APK for Android

1. Update the correct `.env` for the release.
2. Clean the `.expo` and `android` folder and run `prebuild`

```bash
pnpm clean:android && \
pnpm prebuild
```

3. Set up your keystore configuration in [android/gradle.properties](android/gradle.properties) by appending the following values:

```properties
RELEASE_STORE_FILE=keystore/bossrod-release-key.keystore
RELEASE_KEY_ALIAS=bossrod-key-alias
RELEASE_STORE_PASSWORD=bossrod
RELEASE_KEY_PASSWORD=bossrod
```

4. Go to [android/app/build.gradle](android/app/build.gradle) and update the following:
  
```gradle
android {
    // ... existing configs
    signingConfigs {
        release {
            storeFile file(findProperty('RELEASE_STORE_FILE') ?: 'debug.keystore')
            storePassword findProperty('RELEASE_STORE_PASSWORD') ?: 'android'
            keyAlias findProperty('RELEASE_KEY_ALIAS') ?: 'androiddebugkey'
            keyPassword findProperty('RELEASE_KEY_PASSWORD') ?: 'android'
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            shrinkResources true
            minifyEnabled true
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
            crunchPngs (findProperty('android.enablePngCrunchInReleaseBuilds')?.toBoolean() ?: true)
        }
    }
    // ... existing configs
}
```

5. Add the `keystore` folder in [android/app](android/app) and add the project's release keystore file in the folder.

6. Build the `android` app

```bash
pnpm build:android-release
```

7. The release APK is in here: [android/app/build/outputs/apk/release/app-release.apk](android/app/build/outputs/apk/release/app-release.apk).