import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const submissions = [
  {
    id: "SUB001",
    name: "Priya Sharma",
    jewelType: "Gold Necklace",
    weight: "10g",
    status: "Pending",
  },
  {
    id: "SUB002",
    name: "Rahul Verma",
    jewelType: "Diamond Ring",
    weight: "2 carats",
    status: "Approved",
  },
  {
    id: "SUB003",
    name: "Anjali Mehta",
    jewelType: "Platinum Bracelet",
    weight: "5g",
    status: "Rejected",
  },
  {
    id: "SUB004",
    name: "Suresh Kumar",
    jewelType: "Gold Coin",
    weight: "8g",
    status: "Pending",
  },
];

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Submissions</CardTitle>
          <CardDescription>
            Review and manage recent jewelry submissions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Jewel Type</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">{submission.id}</TableCell>
                  <TableCell>{submission.name}</TableCell>
                  <TableCell>{submission.jewelType}</TableCell>
                  <TableCell>{submission.weight}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        submission.status === "Pending"
                          ? "secondary"
                          : submission.status === "Approved"
                          ? "default"
                          : "destructive"
                      }
                      className={submission.status === "Approved" ? "bg-green-500" : ""}
                    >
                      {submission.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Approve</DropdownMenuItem>
                        <DropdownMenuItem>Reject</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;