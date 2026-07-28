import { useLocation } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { useActivityTracking } from "~/hooks/useActivityTracking";

export default function ActivityPageTracker() {
  const location = useLocation();
  const { trackPageVisit } = useActivityTracking();
  const lastTrackedPathRef = useRef<string>();

  useEffect(() => {
    const nextPath = `${location.pathname}`;
    if (lastTrackedPathRef.current === nextPath) {
      return;
    }

    lastTrackedPathRef.current = nextPath;
    trackPageVisit({ path: nextPath });
  }, [location.pathname, trackPageVisit]);

  return null;
}
