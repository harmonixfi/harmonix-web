import { ActivityRequest, TrackingActivityResponse } from "~/@types/activity";

export const sendTrackingActivity = (payload: ActivityRequest) =>
  fetch("/api/activity", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  }).then(async (response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return (await response.json()) as TrackingActivityResponse;
  });
