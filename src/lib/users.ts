import { prisma } from "./db";
import bcrypt from "bcryptjs";

export interface CreateUserData {
  email: string;
  name: string;
}

export interface LoginData {
  email: string;
  password: string;
}

// Generate a random password using crypto
export function generatePassword(): string {
  const crypto = require("crypto");
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  // Generate 12 random bytes and convert to characters
  const randomBytes = crypto.randomBytes(12);
  for (let i = 0; i < 12; i++) {
    password += chars[randomBytes[i] % chars.length];
  }

  return password;
}

// Create a new user
export async function createUser(data: CreateUserData) {
  const password = generatePassword();
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email: data.email.toLowerCase(),
      name: data.name,
      password: hashedPassword,
      loginCount: 0,
    },
  });

  return { user, plainPassword: password };
}

// Find user by email
export async function findUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email: email.toLowerCase() },
  });
}

// Find user by ID
export async function getUserById(userId: string) {
  return await prisma.user.findUnique({
    where: { id: userId },
  });
}

// Verify user password
export async function verifyPassword(user: any, password: string) {
  return await bcrypt.compare(password, user.password);
}

// Update login count and last login
export async function updateUserLogin(userId: string) {
  return await prisma.user.update({
    where: { id: userId },
    data: {
      loginCount: { increment: 1 },
      lastLogin: new Date(),
    },
  });
}

// Get all users for admin
export async function getAllUsers() {
  return await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });
}

// Get user password (for admin purposes)
export async function getUserPassword(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { password: true },
  });
  return user?.password;
}

// Update user password
export async function updateUserPassword(userId: string) {
  const newPassword = generatePassword();
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword },
  });

  return newPassword;
}

// Delete user
export async function deleteUser(userId: string) {
  return await prisma.user.delete({
    where: { id: userId },
  });
}
