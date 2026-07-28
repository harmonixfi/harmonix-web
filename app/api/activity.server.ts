import { ActivityRequest, TrackingActivityResponse } from "~/@types/activity";

const DEFAULT_TRACKING_ACTIVITY_URL =
  "https://oslo-teamview-git-main-chrisportugals-projects.vercel.app/api/ingest";

const getTrackingActivityUrl = () =>
  process.env.TRACKING_ACTIVITY_URL ?? DEFAULT_TRACKING_ACTIVITY_URL;

const getTrackingActivityAccessToken = () =>
  process.env.TRACKING_ACTIVITY_ACCESS_TOKEN ?? "";

export const forwardTrackingActivity = async (
  payload: ActivityRequest,
): Promise<TrackingActivityResponse> => {
  const accessToken = getTrackingActivityAccessToken();

  if (!accessToken) {
    throw new Error("Missing tracking activity access token");
  }

  const response = await fetch(getTrackingActivityUrl(), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return (await response.json()) as TrackingActivityResponse;
};
