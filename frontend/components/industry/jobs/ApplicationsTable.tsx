"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ApplicationsTableProps {
  status: "all" | "shortlisted" | "interviewing";
}

const applications = [
  {
    id: 1,
    candidate: {
      name: "Sarah Chen",
      email: "sarah.chen@example.com",
      avatar: "/avatars/sarah.jpg",
      initials: "SC",
    },
    appliedDate: "2024-03-15",
    experience: "5 years",
    status: "Shortlisted",
    statusColor: "green",
  },
  {
    id: 2,
    candidate: {
      name: "Michael Brown",
      email: "michael.b@example.com",
      avatar: "/avatars/michael.jpg",
      initials: "MB",
    },
    appliedDate: "2024-03-14",
    experience: "3 years",
    status: "In Review",
    statusColor: "yellow",
  },
  {
    id: 3,
    candidate: {
      name: "Emma Wilson",
      email: "emma.w@example.com",
      avatar: "/avatars/emma.jpg",
      initials: "EW",
    },
    appliedDate: "2024-03-12",
    experience: "4 years",
    status: "Interviewing",
    statusColor: "blue",
  },
];

export function ApplicationsTable({ status }: ApplicationsTableProps) {
  const filteredApplications = applications.filter((app) => {
    if (status === "all") return true;
    if (status === "shortlisted") return app.status === "Shortlisted";
    if (status === "interviewing") return app.status === "Interviewing";
    return true;
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Candidate</TableHead>
            <TableHead>Applied Date</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredApplications.map((application) => (
            <TableRow key={application.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={application.candidate.avatar} />
                    <AvatarFallback>{application.candidate.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{application.candidate.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {application.candidate.email}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{application.appliedDate}</TableCell>
              <TableCell>{application.experience}</TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={`bg-${application.statusColor}-500/10 text-${application.statusColor}-500`}
                >
                  {application.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}