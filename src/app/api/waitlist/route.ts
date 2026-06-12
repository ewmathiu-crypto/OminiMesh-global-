import { NextResponse } from "next/server";

type WaitlistRole = "traveler" | "business" | "partner" | "investor";

type WaitlistEntry = {
  id: string;
  email: string;
  role: WaitlistRole;
  country: string;
  createdAt: string;
};

const waitlistEntries: WaitlistEntry[] = [];
const allowedRoles = new Set<WaitlistRole>([
  "traveler",
  "business",
  "partner",
  "investor",
]);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: unknown;
      role?: unknown;
      country?: unknown;
    };

    const email = typeof body.email === "string" ? body.email.trim() : "";
    const role =
      typeof body.role === "string" && allowedRoles.has(body.role as WaitlistRole)
        ? (body.role as WaitlistRole)
        : "traveler";
    const country =
      typeof body.country === "string" ? body.country.trim() : "";

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (country.length < 2) {
      return NextResponse.json(
        { message: "Please enter your country or city." },
        { status: 400 },
      );
    }

    const entry: WaitlistEntry = {
      id: crypto.randomUUID(),
      email,
      role,
      country,
      createdAt: new Date().toISOString(),
    };

    waitlistEntries.push(entry);

    return NextResponse.json(
      {
        message: "Welcome to OminiMesh Global. You are on the waitlist.",
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
