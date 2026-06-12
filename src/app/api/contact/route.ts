import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const name = String(payload.name || "").trim();
    const email = String(payload.email || "").trim();
    const topic = String(payload.topic || "General inquiry").trim();
    const message = String(payload.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please provide your name, email, and message." },
        { status: 400 },
      );
    }

    console.log("[contact] New message", { name, email, topic, message });

    return NextResponse.json(
      { message: "Thanks! Your message has been received." },
      { status: 200 },
    );
  } catch (error) {
    console.error("[contact] Failed to process message", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
