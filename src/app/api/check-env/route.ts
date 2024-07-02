export async function GET(request: Request) {
  return Response.json({ apiUrl: process.env.NEXT_PUBLIC_TEST_URL });
}
