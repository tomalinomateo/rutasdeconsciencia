"use client";

import { useState, useEffect } from "react";
import { Trash2, RefreshCw, Key } from "lucide-react";

interface User {
  id: string;
  email: string;
  name: string;
  loginCount: number;
  lastLogin: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingUser, setDeletingUser] = useState<string | null>(null);
  const [updatingPassword, setUpdatingPassword] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/users");
      const data = await response.json();

      if (data.success) {
        setUsers(data.users);
      } else {
        console.error("Error fetching users:", data.error);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId: string) => {
    if (!confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
      return;
    }

    try {
      setDeletingUser(userId);
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        setUsers((prev) => prev.filter((user) => user.id !== userId));
      } else {
        alert("Error al eliminar usuario: " + data.error);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error al eliminar usuario");
    } finally {
      setDeletingUser(null);
    }
  };

  const updatePassword = async (userId: string) => {
    if (
      !confirm(
        "¿Estás seguro de que quieres actualizar la contraseña de este usuario?"
      )
    ) {
      return;
    }

    try {
      setUpdatingPassword(userId);
      const response = await fetch(
        `/api/admin/users/${userId}/update-password`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (data.success) {
        alert(`Contraseña actualizada: ${data.newPassword}`);
        // Refresh the users list
        fetchUsers();
      } else {
        alert("Error al actualizar contraseña: " + data.error);
      }
    } catch (error) {
      console.error("Error updating password:", error);
      alert("Error al actualizar contraseña");
    } finally {
      setUpdatingPassword(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fff3db] flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-[#f59e0b]" />
          <p className="font-garet text-[#111827]">Cargando usuarios...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff3db] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-the-seasons text-[#111827] mb-2">
            Panel de Administración
          </h1>
          <p className="font-garet text-[#6b7280]">
            Gestiona los usuarios registrados en el sistema
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm flex items-center space-x-8">
            <div className="text-center">
              <h3 className="font-garet font-medium text-[#6b7280] mb-1 text-sm">
                Total de Usuarios
              </h3>
              <p className="text-3xl font-bold font-the-seasons text-[#f59e0b]">
                {users.length}
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-garet font-medium text-[#6b7280] mb-1 text-sm">
                Logins Totales
              </h3>
              <p className="text-3xl font-bold font-the-seasons text-[#f59e0b]">
                {users.reduce((sum, user) => sum + user.loginCount, 0)}
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-garet font-medium text-[#6b7280] mb-1 text-sm">
                Usuarios Activos
              </h3>
              <p className="text-3xl font-bold font-the-seasons text-[#f59e0b]">
                {users.filter((user) => user.loginCount > 0).length}
              </p>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f9fafb]">
                <tr>
                  <th className="px-6 py-4 text-left font-garet font-medium text-[#374151]">
                    Usuario
                  </th>

                  <th className="px-6 py-4 text-left font-garet font-medium text-[#374151]">
                    Logins
                  </th>
                  <th className="px-6 py-4 text-left font-garet font-medium text-[#374151]">
                    Último Login
                  </th>
                  <th className="px-6 py-4 text-left font-garet font-medium text-[#374151]">
                    Registrado
                  </th>
                  <th className="px-6 py-4 text-left font-garet font-medium text-[#374151]">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f4f6]">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-[#f9fafb] transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-garet font-medium text-[#111827]">
                          {user.name}
                        </p>
                        <p className="font-garet text-sm text-[#6b7280]">
                          {user.email}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="font-garet font-medium text-[#111827]">
                        {user.loginCount}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-garet text-sm text-[#6b7280]">
                        {user.lastLogin ? formatDate(user.lastLogin) : "Nunca"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-garet text-sm text-[#6b7280]">
                        {formatDate(user.createdAt)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => updatePassword(user.id)}
                          disabled={updatingPassword === user.id}
                          className="text-blue-500 hover:text-blue-700 transition-colors disabled:opacity-50"
                          title="Actualizar contraseña"
                        >
                          <Key className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteUser(user.id)}
                          disabled={deletingUser === user.id}
                          className="text-red-500 hover:text-red-700 transition-colors disabled:opacity-50"
                          title="Eliminar usuario"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {users.length === 0 && (
            <div className="text-center py-12">
              <p className="font-garet text-[#6b7280]">
                No hay usuarios registrados
              </p>
            </div>
          )}
        </div>

        {/* Refresh Button */}
        <div className="mt-6 text-center">
          <button
            onClick={fetchUsers}
            className="bg-[#f59e0b] text-white hover:bg-[#d97706] transition-colors duration-300 font-garet font-medium px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Actualizar Lista
          </button>
        </div>
      </div>
    </div>
  );
}
