// app/api/fetchMovie/route.ts
import { NextRequest, NextResponse } from "next/server";
import { fetchMovie } from "@/lib/omdb";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "No movie ID provided" }, { status: 400 });

  try {
    const movie = await fetchMovie(id);
    return NextResponse.json(movie);
  } catch (err: any) {
    console.error("Failed to fetch movie:", err.message);
    return NextResponse.json({ error: err.message || "Failed to fetch movie" }, { status: 500 });
  }
}