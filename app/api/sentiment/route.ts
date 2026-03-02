// app/api/sentiment/route.ts
import { NextRequest, NextResponse } from "next/server";
import { summarizeSentiment } from "@/lib/ai"; // <-- ES module import

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const reviews: string[] = body.reviews || [];

    if (!reviews.length) {
      return NextResponse.json(
        { summary: "No reviews provided", sentiment: "mixed" },
        { status: 400 }
      );
    }

    const sentimentResult = await summarizeSentiment(reviews);
    return NextResponse.json(sentimentResult);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { summary: "Error processing request", sentiment: "mixed" },
      { status: 500 }
    );
  }
}