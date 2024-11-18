import { NextResponse } from "next/server";
import { workMenu } from "@/data/informationData";

export async function GET() {
    return NextResponse.json(workMenu);
}
