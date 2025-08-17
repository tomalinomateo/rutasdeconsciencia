import { NextRequest, NextResponse } from "next/server";
import { updateUserPassword } from "@/lib/users";

export async function POST(
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

    const newPassword = await updateUserPassword(id);

    return NextResponse.json({
      success: true,
      message: "Contraseña actualizada exitosamente",
      newPassword: newPassword,
    });
  } catch (error) {
    console.error("Update password error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
