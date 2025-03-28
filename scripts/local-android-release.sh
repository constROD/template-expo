#!/bin/bash

# Exit on error
set -e

echo "Starting Android APK build process..."

# Step 1: Update the .env file for release
# If you want to use a specific .env file, uncomment and modify the line below
# cp .env.production .env

# Step 2: Clean the .expo and android folder and run prebuild
echo "Cleaning project and running prebuild..."
pnpm clean:android && pnpm prebuild

# Step 3: Set up keystore configuration in gradle.properties
echo "Setting up keystore configuration..."
GRADLE_PROPS="android/gradle.properties"

# Check if the keystore values already exist in gradle.properties
if ! grep -q "RELEASE_STORE_FILE" "$GRADLE_PROPS"; then
  echo "" >>"$GRADLE_PROPS"
  echo "# Release keystore configuration" >>"$GRADLE_PROPS"
  echo "RELEASE_STORE_FILE=keystore/bossrod-release-key.keystore" >>"$GRADLE_PROPS"
  echo "RELEASE_KEY_ALIAS=bossrod-key-alias" >>"$GRADLE_PROPS"
  echo "RELEASE_STORE_PASSWORD=bossrod" >>"$GRADLE_PROPS"
  echo "RELEASE_KEY_PASSWORD=bossrod" >>"$GRADLE_PROPS"
  echo "Added keystore configuration to gradle.properties"
else
  echo "Keystore configuration already exists in gradle.properties"
fi

# Create the keystore directory if it doesn't exist
KEYSTORE_DIR="android/app/keystore"
if [ ! -d "$KEYSTORE_DIR" ]; then
  echo "Creating keystore directory: $KEYSTORE_DIR"
  mkdir -p "$KEYSTORE_DIR"
fi

# Target keystore path in the project
TARGET_KEYSTORE_PATH="$KEYSTORE_DIR/bossrod-release-key.keystore"

# Prompt user for keystore file path
echo ""
echo "Please provide the path to your keystore file (REQUIRED):"
echo "This should be the full path to your existing keystore file"
echo ""
read -p "Keystore path: " SOURCE_KEYSTORE_PATH

# Check if user provided a keystore path
if [ -z "$SOURCE_KEYSTORE_PATH" ]; then
  echo "⚠️ Error: Keystore path is required to proceed."
  echo "Build process canceled."
  exit 1
fi

if [ -f "$SOURCE_KEYSTORE_PATH" ]; then
  echo "Copying keystore from $SOURCE_KEYSTORE_PATH to $TARGET_KEYSTORE_PATH"
  cp "$SOURCE_KEYSTORE_PATH" "$TARGET_KEYSTORE_PATH"
  echo "✅ Keystore file copied successfully!"
else
  echo "⚠️ Error: Keystore file not found at $SOURCE_KEYSTORE_PATH"
  echo "Build process canceled."
  exit 1
fi

# Reminder to update build.gradle
echo ""
echo "⚠️ IMPORTANT: Make sure to update your android/app/build.gradle file with proper signing config ⚠️"
echo "Add/modify the following in android/app/build.gradle:"
echo ""
echo "android {"
echo "    // ... existing configs"
echo "    signingConfigs {"
echo "        release {"
echo "            storeFile file(findProperty('RELEASE_STORE_FILE') ?: 'debug.keystore')"
echo "            storePassword findProperty('RELEASE_STORE_PASSWORD') ?: 'android'"
echo "            keyAlias findProperty('RELEASE_KEY_ALIAS') ?: 'androiddebugkey'"
echo "            keyPassword findProperty('RELEASE_KEY_PASSWORD') ?: 'android'"
echo "        }"
echo "    }"
echo "    buildTypes {"
echo "        release {"
echo "            signingConfig signingConfigs.release"
echo "            shrinkResources true"
echo "            minifyEnabled true"
echo "            proguardFiles getDefaultProguardFile(\"proguard-android.txt\"), \"proguard-rules.pro\""
echo "            crunchPngs (findProperty('android.enablePngCrunchInReleaseBuilds')?.toBoolean() ?: true)"
echo "        }"
echo "    }"
echo "    // ... existing configs"
echo "}"
echo ""
read -p "Press Enter to continue after verifying build.gradle..."

# Check if keystore file exists at the target location
if [ ! -f "$TARGET_KEYSTORE_PATH" ]; then
  echo "⚠️ Warning: Keystore file not found at $TARGET_KEYSTORE_PATH"
  echo "Build process canceled."
  exit 1
fi

# Step 6: Build the android app
echo "Building Android release APK..."
pnpm build:android-release

# Step 7: Inform about the APK location
APK_PATH="android/app/build/outputs/apk/release/app-release.apk"
if [ -f "$APK_PATH" ]; then
  echo "✅ Build successful!"
  echo "Release APK is located at: $APK_PATH"
  echo "APK size: $(du -h "$APK_PATH" | cut -f1)"
else
  echo "❌ Build may have failed. APK not found at the expected location."
  exit 1
fi
