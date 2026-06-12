import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const email = String(payload.email || "").trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    console.log("[newsletter] New subscriber", { email });

    return NextResponse.json(
      { message: "Welcome to OminiMesh updates." },
      { status: 200 },
    );
  } catch (error) {
    console.error("[newsletter] Failed to process subscription", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
