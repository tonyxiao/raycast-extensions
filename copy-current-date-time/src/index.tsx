import { closeMainWindow, copyTextToClipboard, pasteText, showHUD } from "@raycast/api";
import { DateTime } from "luxon";

export default async function pasteDateTimeToClipboard() {
  // 20210911-1530 is the desired format
  const dateStr = DateTime.local().toFormat("yyyyMMdd-hhmm ");
  await pasteText(dateStr);
  await closeMainWindow();
}

export async function copyDateTimeToClipboard() {
  // Alternative
  const dateStr = DateTime.local().toFormat("yyyyMMdd-hhmm ");
  await copyTextToClipboard(dateStr);
  await showHUD(`${dateStr} copied to clipboard`);
}