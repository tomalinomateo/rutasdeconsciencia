import { NextRequest, NextResponse } from "next/server";
import { getUserPassword } from "@/lib/users";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "ID de usuario requerido" },
        { status: 400 }
      );
    }

    const hashedPassword = await getUserPassword(id);

    if (!hashedPassword) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    // For security reasons, we don't return the actual password
    // In a real implementation, you might want to store plain passwords temporarily
    // or implement a secure way to retrieve them
    return NextResponse.json({
      success: true,
      message: "Contraseña disponible (implementar recuperación segura)",
    });
  } catch (error) {
    console.error("Get password error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
