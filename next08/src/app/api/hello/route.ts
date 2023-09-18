import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";

export async function GET(request: Request) {
  const remaining = await limiter.removeTokens(1);

  const origin = request.headers.get("origin");

  console.log("remaining: ", remaining);

  if (remaining < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too May Requests",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "Text/plaim",
      },
    });
  } else {
    return new Response("Hello, Next.js!");
  }
}
