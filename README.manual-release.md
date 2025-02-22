# How to Manually Build and Release APK for Android

1. Update the correct `.env` for the release.
2. Clean the `.expo` and `android` folder.

```bash
pnpm clean:android
```

3. Build the `android` app.

```bash
pnpm prebuild
```

4. Set up your keystore configuration in `android/local.properties`. If this file doesn't exist, create it (it's gitignored by default):

```properties
RELEASE_STORE_FILE=keystore/cbattle-release-key.keystore
RELEASE_KEY_ALIAS=cbattle-key-alias
RELEASE_STORE_PASSWORD=cbattle
RELEASE_KEY_PASSWORD=cbattle
```

5. Add a `keystore` folder in [android/app](android/app) and add the project's release keystore file in the folder.
6. Go to [android/app/build.gradle](android/app/build.gradle) and update the following:
  
```gradle
def getLocalProperty(key, defaultValue = null) {
    def localProperties = new Properties()
    def localPropertiesFile = rootProject.file('local.properties')
    if (localPropertiesFile.exists()) {
        localPropertiesFile.withReader('UTF-8') { reader ->
            localProperties.load(reader)
        }
    }
    return localProperties.getProperty(key, defaultValue)
}

android {
    signingConfigs {
        // ... existing signing configs
        release {
            storeFile file(getLocalProperty('RELEASE_STORE_FILE', 'debug.keystore'))
            storePassword getLocalProperty('RELEASE_STORE_PASSWORD', 'android')
            keyAlias getLocalProperty('RELEASE_KEY_ALIAS', 'androiddebugkey')
            keyPassword getLocalProperty('RELEASE_KEY_PASSWORD', 'android')
        }
    }
    buildTypes {
        // ... existing build types
        release {
            signingConfig signingConfigs.release
            // ... existing release config
        }
    }
}
```

7. Build the `android` app

```bash
pnpm build:android-release
```

8. The release APK is in here: [android/app/build/outputs/apk/release/app-release.apk](android/app/build/outputs/apk/release/app-release.apk).