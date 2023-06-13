import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';
export async function GET() {
    const filePath = path.join(process.cwd(), 'public', 'resume.pdf');
    const fileStream = fs.readFileSync(filePath);
    return new NextResponse(fileStream, { headers: { 'Content-Type': 'application/pdf' } });
}