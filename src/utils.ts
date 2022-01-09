import { Dimensions, Platform, StatusBar } from "react-native";

export function getDeviceHeight(
  statusBarTranslucent: boolean | undefined
): number {
  var height = Dimensions.get("window").height;

  if (Platform.OS === "android" && !statusBarTranslucent) {
    return StatusBar.currentHeight ? height - StatusBar.currentHeight : height;
  }

  return height;
}

export const getElevation = (elevation: number) => {
  return {
    elevation,
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  };
};

export const SUPPORTED_ORIENTATIONS: (
  | "portrait"
  | "portrait-upside-down"
  | "landscape"
  | "landscape-left"
  | "landscape-right"
)[] = [
  "portrait",
  "portrait-upside-down",
  "landscape",
  "landscape-left",
  "landscape-right",
];

export const waitAsync = (ms: number): Promise<null> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });
