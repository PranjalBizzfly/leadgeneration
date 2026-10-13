import { searchIndex } from "@/lib/registry";

export function GET() {
  return Response.json(searchIndex());
}
