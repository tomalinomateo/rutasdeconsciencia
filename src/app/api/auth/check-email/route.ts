import { NextRequest, NextResponse } from "next/server";
import { findUserByEmail } from "@/lib/users";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email requerido" }, { status: 400 });
    }

    const user = await findUserByEmail(email);

    return NextResponse.json({
      userExists: !!user,
    });
  } catch (error) {
    console.error("Check email error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
