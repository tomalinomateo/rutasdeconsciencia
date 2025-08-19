import { NextRequest, NextResponse } from "next/server";
import { getUserById } from "@/lib/users";

export async function GET(request: NextRequest) {
  try {
    // Get token from Authorization header
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Token de autorización requerido" },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7); // Remove "Bearer " prefix

    // For now, we'll use a simple token validation
    // In a real app, you'd verify the JWT token
    const userId = token; // Assuming token is the user ID for simplicity

    // Get user data
    const user = await getUserById(userId);
    if (!user) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    // Return user data without sensitive information
    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    return NextResponse.json({ user: userData });
  } catch (error) {
    console.error("Error verifying token:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

