import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { type Address, type ActivityRequest } from "~/@types/activity";
import { sendTrackingActivity } from "~/api/activity";

type TrackPageVisitInput = {
  path?: string;
  ref?: string;
  site?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  wallet?: Address;
};

type TrackUiClickInput = {
  element: string;
  path?: string;
  site?: string;
  wallet?: Address;
};

const getCurrentPath = () =>
  typeof window === "undefined" ? "/" : `${window.location.pathname}`;

const getCurrentUtmParams = () => {
  if (typeof window === "undefined") {
    return {
      utm_source: undefined,
      utm_medium: undefined,
      utm_campaign: undefined,
    };
  }

  const searchParams = new URLSearchParams(window.location.search);

  return {
    utm_source: searchParams.get("utm_source") ?? undefined,
    utm_medium: searchParams.get("utm_medium") ?? undefined,
    utm_campaign: searchParams.get("utm_campaign") ?? undefined,
  };
};

export const useActivityTracking = () => {
  const { mutate } = useMutation({
    mutationFn: (payload: ActivityRequest) => sendTrackingActivity(payload),
    retry: false,
  });

  const trackPageVisit = useCallback(
    (input: TrackPageVisitInput = {}) => {
      const utmParams = getCurrentUtmParams();

      mutate({
        event: "page.visit",
        payload: {
          path: input.path ?? getCurrentPath(),
          site: "landing",
          utm_source: input.utm_source ?? utmParams.utm_source,
          utm_medium: input.utm_medium ?? utmParams.utm_medium,
          utm_campaign: input.utm_campaign ?? utmParams.utm_campaign,
        },
      });
    },
    [mutate],
  );

  const trackUiClick = useCallback(
    (input: TrackUiClickInput) => {
      mutate({
        event: "ui.click",
        payload: {
          element: input.element,
          path: input.path ?? getCurrentPath(),
          site: "landing",
        },
      });
    },
    [mutate],
  );

  return {
    trackPageVisit,
    trackUiClick,
  };
};
