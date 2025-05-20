# How to Manually Build a Release APK for Android

1. Update the correct `.env` for the release.

2. Add the `keystore` folder in [android/app](android/app) and add the project's release keystore file in the folder.

3. Set up your keystore configuration in [android/gradle.properties](android/gradle.properties) by appending the following values:

```properties
RELEASE_STORE_FILE=keystore/cbattle-release-key.keystore
RELEASE_KEY_ALIAS=cbattle-key-alias
RELEASE_STORE_PASSWORD=cbattle
RELEASE_KEY_PASSWORD=cbattle
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
            shrinkResources (findProperty('android.enableShrinkResourcesInReleaseBuilds')?.toBoolean() ?: false)
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
            crunchPngs (findProperty('android.enablePngCrunchInReleaseBuilds')?.toBoolean() ?: true)
        }
    }
    // ... existing configs
}
```

6. Build the `android` app

```bash
pnpm build:android-release
```

7. The release APK is in here: [android/app/build/outputs/apk/release/app-release.apk](android/app/build/outputs/apk/release/app-release.apk).