import { NextRequest, NextResponse } from "next/server";
import { createUser, findUserByEmail } from "@/lib/users";

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    // Validate input
    if (!email || !name) {
      return NextResponse.json(
        { error: "Email y nombre son requeridos" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: "Usuario ya existe", userExists: true },
        { status: 409 }
      );
    }

    // Create new user
    const { user, plainPassword } = await createUser({ email, name });

    // TODO: Send password via email (implement later)
    console.log("New user created:", { email, password: plainPassword });

    return NextResponse.json({
      success: true,
      message: "Usuario creado exitosamente",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      token: user.id, // For now, using user ID as token
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
