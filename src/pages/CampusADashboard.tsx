import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Eye, 
  Upload, 
  Download, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Building2,
  Users,
  FileText,
  BarChart3,
  Bell,
  LogOut,
  Home,
  FileCheck,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";

const CampusADashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  // Mock data for certificate requests
  const requests = [
    {
      id: "REQ-001",
      studentName: "John Doe",
      studentId: "STU-2024-001",
      program: "Computer Science",
      campus: "Campus B",
      submissionDate: "2024-01-15",
      status: "pending"
    },
    {
      id: "REQ-002", 
      studentName: "Jane Smith",
      studentId: "STU-2024-002",
      program: "Mechanical Engineering",
      campus: "Campus B",
      submissionDate: "2024-01-14",
      status: "verified"
    },
    {
      id: "REQ-003",
      studentName: "Mike Johnson", 
      studentId: "STU-2024-003",
      program: "Business Administration",
      campus: "Campus C",
      submissionDate: "2024-01-13",
      status: "rejected"
    },
    {
      id: "REQ-004",
      studentName: "Sarah Wilson",
      studentId: "STU-2024-004", 
      program: "Medicine",
      campus: "Campus C",
      submissionDate: "2024-01-12",
      status: "pending"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-success text-success-foreground">Verified</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      case "pending":
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const stats = [
    { title: "Total Requests", value: "1,247", icon: FileText, change: "+12%" },
    { title: "Verified Today", value: "23", icon: CheckCircle2, change: "+8%" },
    { title: "Pending Review", value: "45", icon: Clock, change: "-5%" },
    { title: "Active Campuses", value: "12", icon: Building2, change: "0%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-card border-r shadow-card">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-academic rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Campus A</h1>
              <p className="text-sm text-muted-foreground">Admin Portal</p>
            </div>
          </div>

          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-3 bg-primary/10 text-primary">
              <Home className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <FileText className="h-4 w-4" />
              Requests
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Upload className="h-4 w-4" />
              Upload Certificate
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </nav>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <Link to="/">
            <Button variant="outline" className="w-full gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Campus A Dashboard</h1>
            <p className="text-muted-foreground">Manage certificate verification requests</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4" />
              Notifications
            </Button>
            <Button variant="academic">
              <Download className="h-4 w-4" />
              Export Data
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <Badge variant={stat.change.startsWith('+') ? 'default' : 'secondary'} className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="requests">Certificate Requests</TabsTrigger>
            <TabsTrigger value="logs">Activity Logs</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="requests">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Certificate Requests</CardTitle>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search by name or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-40">
                        <Filter className="h-4 w-4" />
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="verified">Verified</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Request ID</TableHead>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Student ID</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Campus</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>
                        <TableCell>{request.studentName}</TableCell>
                        <TableCell>{request.studentId}</TableCell>
                        <TableCell>{request.program}</TableCell>
                        <TableCell>{request.campus}</TableCell>
                        <TableCell>{request.submissionDate}</TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setSelectedRequest(request)}
                              >
                                <Eye className="h-4 w-4" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Request Details - {selectedRequest?.id}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium">Student Name</label>
                                    <p className="text-sm text-muted-foreground">{selectedRequest?.studentName}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Student ID</label>
                                    <p className="text-sm text-muted-foreground">{selectedRequest?.studentId}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Program</label>
                                    <p className="text-sm text-muted-foreground">{selectedRequest?.program}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Campus</label>
                                    <p className="text-sm text-muted-foreground">{selectedRequest?.campus}</p>
                                  </div>
                                </div>

                                <div>
                                  <label className="text-sm font-medium">Verification Status</label>
                                  <div className="flex items-center gap-4 mt-2">
                                    <Button variant="outline" size="sm">
                                      <CheckCircle2 className="h-4 w-4 text-success" />
                                      Student Info Matches
                                    </Button>
                                    <Button variant="outline" size="sm">
                                      <CheckCircle2 className="h-4 w-4 text-success" />
                                      Degree Completed
                                    </Button>
                                  </div>
                                </div>

                                <div>
                                  <label className="text-sm font-medium">Remarks</label>
                                  <Textarea placeholder="Add your verification remarks..." className="mt-2" />
                                </div>

                                <div>
                                  <label className="text-sm font-medium">Upload Certificate</label>
                                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center">
                                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                                    <p className="text-sm text-muted-foreground">Drag & drop PDF or click to browse</p>
                                    <Button variant="outline" size="sm" className="mt-2">
                                      Choose File
                                    </Button>
                                  </div>
                                </div>

                                <div className="flex justify-end gap-4">
                                  <Button variant="outline">
                                    <XCircle className="h-4 w-4" />
                                    Reject
                                  </Button>
                                  <Button variant="success">
                                    <CheckCircle2 className="h-4 w-4" />
                                    Verify & Upload
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Activity Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Certificate verified for John Doe (STU-2024-001)", time: "2 hours ago", type: "success" },
                    { action: "New request submitted from Campus B", time: "4 hours ago", type: "info" },
                    { action: "Certificate rejected for Mike Johnson", time: "6 hours ago", type: "error" },
                    { action: "Bulk upload completed - 15 certificates", time: "1 day ago", type: "success" }
                  ].map((log, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          log.type === 'success' ? 'bg-success' : 
                          log.type === 'error' ? 'bg-destructive' : 'bg-primary'
                        }`} />
                        <span className="text-sm">{log.action}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{log.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Monthly Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Processed</span>
                      <span className="font-bold">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Verified</span>
                      <span className="font-bold text-success">1,156</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rejected</span>
                      <span className="font-bold text-destructive">91</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Success Rate</span>
                      <span className="font-bold">92.7%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Campus Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["Campus B", "Campus C", "Campus D", "Campus E"].map((campus, index) => (
                      <div key={campus} className="flex items-center justify-between">
                        <span>{campus}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary" 
                              style={{ width: `${90 - index * 10}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{90 - index * 10}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CampusADashboard;