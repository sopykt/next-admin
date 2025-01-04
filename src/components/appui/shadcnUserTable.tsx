"use client";

import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  phoneNumber: string | null;
}

type SortKey = keyof User | null;
type SortOrder = "asc" | "desc";

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/api/listUsers");
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortKey) return 0;
    const valA = a[sortKey] ?? "";
    const valB = b[sortKey] ?? "";
    const comparison = valA > valB ? 1 : valA < valB ? -1 : 0;
    return sortOrder === "asc" ? comparison : -comparison;
  });

  const getSortIcon = (key: SortKey) => {
    if (sortKey === key) {
      return sortOrder === "asc" ? "▲" : "▼";
    }
    return "↕";
  };

  return (
    <div className="w-full p-4 bg-card text-card-foreground rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("uid")}
            >
              UID {getSortIcon("uid")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("email")}
            >
              Email {getSortIcon("email")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("displayName")}
            >
              Display Name {getSortIcon("displayName")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("phoneNumber")}
            >
              Phone Number {getSortIcon("phoneNumber")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers.length > 0 ? (
            sortedUsers.map((user) => (
              <TableRow key={user.uid}>
                <TableCell>{user.uid}</TableCell>
                <TableCell>{user.email || "N/A"}</TableCell>
                <TableCell>{user.displayName || "N/A"}</TableCell>
                <TableCell>{user.phoneNumber || "-"}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No users available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
