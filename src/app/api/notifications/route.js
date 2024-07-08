import fs from 'fs';
import path from 'path';

import { NextResponse } from 'next/server';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'notifications.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}