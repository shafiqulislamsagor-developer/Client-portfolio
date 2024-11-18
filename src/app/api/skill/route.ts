import { NextResponse } from "next/server";
import { SkillsData } from "@/data/informationData";

export async function GET() {
    return NextResponse.json(SkillsData);
}
