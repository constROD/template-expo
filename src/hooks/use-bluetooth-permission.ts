import * as ExpoDevice from 'expo-device';
import { PermissionsAndroid, Platform } from 'react-native';

export function useBluetoothPermission() {
  const requestAndroid31Permission = async () => {
    const bluetoothScanPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      {
        title: 'Allow Bluetooth Scan',
        message: 'Enable Bluetooth Scan',
        buttonPositive: 'Allow',
        buttonNegative: 'Never',
        buttonNeutral: 'Ask Me Later',
      }
    );
    const bluetoothConnectPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      {
        title: 'Allow Bluetooth Connect',
        message: 'Enable Bluetooth Connect',
        buttonPositive: 'Allow',
        buttonNegative: 'Never',
        buttonNeutral: 'Ask Me Later',
      }
    );

    let fineLocationPermission = 'granted';

    if (ExpoDevice.platformApiLevel && ExpoDevice.platformApiLevel < 31) {
      fineLocationPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Allow Location',
          message: 'Enable Location',
          buttonPositive: 'Allow',
          buttonNegative: 'Never',
          buttonNeutral: 'Ask Me Later',
        }
      );
    }

    return (
      bluetoothScanPermission === 'granted' &&
      bluetoothConnectPermission === 'granted' &&
      fineLocationPermission === 'granted'
    );
  };

  const requestPermission = async () => {
    if (Platform.OS === 'ios') return true;
    if (ExpoDevice.platformApiLevel && ExpoDevice.platformApiLevel < 31) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Allow Location',
          message: 'Enable Location',
          buttonPositive: 'Allow',
          buttonNegative: 'Never',
          buttonNeutral: 'Ask Me Later',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      const isAndroid31PermissionsGranted = await requestAndroid31Permission();
      return isAndroid31PermissionsGranted;
    }
  };

  return {
    requestPermission,
  };
}
