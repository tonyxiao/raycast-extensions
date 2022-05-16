import { Clipboard, closeMainWindow, showToast, Toast } from "@raycast/api";
import fetch from "cross-fetch";
import { setTimeout } from "timers/promises";

export default async function clipboardUrlToContent() {
  const url = await Clipboard.readText();
  if (url?.startsWith("http")) {
    await showToast({ title: "Fetching...", message: url, style: Toast.Style.Animated });
    const res = await fetch(url);
    const text = await res.text();
    await Clipboard.copy(text);
    await showToast({ title: "Copied to clipboard", message: text });
  }
  await setTimeout(1000);
  await closeMainWindow();
}
