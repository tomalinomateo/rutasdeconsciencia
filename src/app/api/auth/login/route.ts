import { NextRequest, NextResponse } from "next/server";
import { findUserByEmail, verifyPassword, updateUserLogin } from "@/lib/users";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email y contraseña son requeridos" },
        { status: 400 }
      );
    }

    // Find user
    const user = await findUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    // Verify password
    const isValidPassword = await verifyPassword(user, password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Contraseña incorrecta" },
        { status: 401 }
      );
    }

    // Update login count and last login
    await updateUserLogin(user.id);

    return NextResponse.json({
      success: true,
      message: "Login exitoso",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        loginCount: user.loginCount + 1,
      },
      token: user.id, // For now, using user ID as token
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
