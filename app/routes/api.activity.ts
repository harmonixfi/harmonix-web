import { ActionFunctionArgs } from "@remix-run/node";
import { ActivityRequest } from "~/@types/activity";
import { forwardTrackingActivity } from "~/api/activity.server";

export const loader = () =>
  new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: "POST" },
  });

export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "POST" },
    });
  }

  const payload = (await request.json()) as ActivityRequest;
  const response = await forwardTrackingActivity(payload);

  return Response.json(response, {
    headers: { "Cache-Control": "no-store" },
  });
};
