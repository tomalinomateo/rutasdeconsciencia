import { NextRequest, NextResponse } from "next/server";
import { getAllUsers } from "@/lib/users";

export async function GET(request: NextRequest) {
  try {
    const users = await getAllUsers();

    return NextResponse.json({
      success: true,
      users: users.map((user) => ({
        id: user.id,
        email: user.email,
        name: user.name,
        loginCount: user.loginCount,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      })),
    });
  } catch (error) {
    console.error("Get users error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
