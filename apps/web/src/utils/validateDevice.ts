import { LaunchParams } from "@telegram-apps/sdk-react";

/**
 * Validate if the device is valid for the app.
 * @param lp - Launch params.
 * @returns True if the device is valid, false otherwise.
 */
export const validateDevice = (lp: LaunchParams): boolean => {
  return lp.tgWebAppPlatform === "ios" || lp.tgWebAppPlatform === "android";
};
