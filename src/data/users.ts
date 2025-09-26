export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Customer';
  status: 'Active' | 'Suspended';
  createdAt: string;
}

export const users: User[] = [
  { id: 1, name: "Priya Sharma", email: "priya.sharma@example.com", role: "Customer", status: "Active", createdAt: "2023-10-26T10:00:00Z" },
  { id: 2, name: "Rahul Verma", email: "rahul.verma@example.com", role: "Customer", status: "Active", createdAt: "2023-10-25T11:30:00Z" },
  { id: 3, name: "Admin User", email: "admin@jewelpledge.com", role: "Admin", status: "Active", createdAt: "2023-01-15T09:00:00Z" },
  { id: 4, name: "Anjali Mehta", email: "anjali.mehta@example.com", role: "Customer", status: "Suspended", createdAt: "2023-10-24T15:45:00Z" },
];