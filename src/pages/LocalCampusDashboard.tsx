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
import { Label } from "@/components/ui/label";
import { 
  Upload, 
  Download, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Building2,
  Send,
  FileText,
  Bell,
  LogOut,
  Home,
  Eye,
  Edit,
  RefreshCw,
  Plus,
  Users
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const LocalCampusDashboard = () => {
  const { campusId } = useParams();
  const { toast } = useToast();
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  // Mock data for submitted requests
  const requests = [
    {
      id: "REQ-B-001",
      studentName: "Alice Johnson",
      studentId: "STU-2024-101",
      program: "Computer Engineering",
      submissionDate: "2024-01-15",
      status: "verified",
      remarks: "Certificate verified and uploaded successfully"
    },
    {
      id: "REQ-B-002", 
      studentName: "Bob Wilson",
      studentId: "STU-2024-102",
      program: "Electrical Engineering",
      submissionDate: "2024-01-14",
      status: "pending",
      remarks: ""
    },
    {
      id: "REQ-B-003",
      studentName: "Carol Davis",
      studentId: "STU-2024-103",
      program: "Software Engineering",
      submissionDate: "2024-01-13",
      status: "rejected",
      remarks: "Student information does not match records. Please verify and resubmit."
    }
  ];

  const getCampusName = (id: string) => {
    const campusMap: {[key: string]: string} = {
      'campus-b': 'Campus B',
      'campus-c': 'Campus C', 
      'campus-d': 'Campus D',
      'campus-e': 'Campus E'
    };
    return campusMap[id || ''] || 'Local Campus';
  };

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

  const handleSubmitRequest = () => {
    toast({
      title: "Request Submitted",
      description: "Certificate request has been submitted to Campus A for verification.",
    });
    setShowSubmissionForm(false);
  };

  const stats = [
    { title: "Total Submitted", value: "89", icon: FileText, change: "+5" },
    { title: "Verified", value: "67", icon: CheckCircle2, change: "+3" },
    { title: "Pending", value: "15", icon: Clock, change: "+2" },
    { title: "Success Rate", value: "85%", icon: Users, change: "+2%" }
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
              <h1 className="font-bold text-lg">{getCampusName(campusId || '')}</h1>
              <p className="text-sm text-muted-foreground">Admin Portal</p>
            </div>
          </div>

          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-3 bg-primary/10 text-primary">
              <Home className="h-4 w-4" />
              Dashboard
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-3"
              onClick={() => setShowSubmissionForm(true)}
            >
              <Send className="h-4 w-4" />
              Submit Request
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <FileText className="h-4 w-4" />
              View Responses
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Bell className="h-4 w-4" />
              Notifications
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
            <h1 className="text-3xl font-bold text-foreground">{getCampusName(campusId || '')} Dashboard</h1>
            <p className="text-muted-foreground">Manage certificate requests and submissions</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4" />
              3 New Notifications
            </Button>
            <Button variant="academic" onClick={() => setShowSubmissionForm(true)}>
              <Plus className="h-4 w-4" />
              New Request
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
                      <Badge variant="secondary" className="text-xs">
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
            <TabsTrigger value="requests">Submitted Requests</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="requests">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Certificate Requests</CardTitle>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4" />
                    Refresh
                  </Button>
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
                      <TableHead>Submission Date</TableHead>
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
                        <TableCell>{request.submissionDate}</TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
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
                                      <label className="text-sm font-medium">Status</label>
                                      {selectedRequest && getStatusBadge(selectedRequest.status)}
                                    </div>
                                  </div>

                                  {selectedRequest?.remarks && (
                                    <div>
                                      <label className="text-sm font-medium">Remarks from Campus A</label>
                                      <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg mt-2">
                                        {selectedRequest.remarks}
                                      </p>
                                    </div>
                                  )}

                                  {selectedRequest?.status === 'verified' && (
                                    <div className="flex justify-end gap-4">
                                      <Button variant="academic">
                                        <Download className="h-4 w-4" />
                                        Download Certificate
                                      </Button>
                                    </div>
                                  )}

                                  {selectedRequest?.status === 'rejected' && (
                                    <div className="flex justify-end gap-4">
                                      <Button variant="outline">
                                        <Edit className="h-4 w-4" />
                                        Edit & Resubmit
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </DialogContent>
                            </Dialog>

                            {request.status === 'verified' && (
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      type: "success", 
                      title: "Certificate Verified", 
                      message: "Certificate for Alice Johnson has been verified and is now available for download.",
                      time: "2 hours ago"
                    },
                    { 
                      type: "error", 
                      title: "Request Rejected", 
                      message: "Certificate request for Carol Davis was rejected. Please check the remarks and resubmit.",
                      time: "4 hours ago"
                    },
                    { 
                      type: "info", 
                      title: "Request Received", 
                      message: "Your certificate request for Bob Wilson has been received and is under review.",
                      time: "1 day ago"
                    }
                  ].map((notification, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === 'success' ? 'bg-success' : 
                        notification.type === 'error' ? 'bg-destructive' : 'bg-primary'
                      }`} />
                      <div className="flex-1">
                        <h4 className="font-medium">{notification.title}</h4>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Monthly Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Requests Submitted</span>
                      <span className="font-bold">89</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Successfully Verified</span>
                      <span className="font-bold text-success">67</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rejected</span>
                      <span className="font-bold text-destructive">7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Still Pending</span>
                      <span className="font-bold text-warning">15</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6">
                    <Download className="h-4 w-4" />
                    Export Report
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Processing Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Average Processing Time</span>
                      <span className="font-bold">2.3 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fastest Processing</span>
                      <span className="font-bold text-success">4 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Longest Processing</span>
                      <span className="font-bold">7 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Current Queue Size</span>
                      <span className="font-bold">15 requests</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Submission Form Dialog */}
      <Dialog open={showSubmissionForm} onOpenChange={setShowSubmissionForm}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Submit New Certificate Request</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="studentName">Student Name</Label>
                <Input id="studentName" placeholder="Enter full name" />
              </div>
              <div>
                <Label htmlFor="studentId">Student ID</Label>
                <Input id="studentId" placeholder="STU-2024-XXX" />
              </div>
              <div>
                <Label htmlFor="program">Program</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="ee">Electrical Engineering</SelectItem>
                    <SelectItem value="me">Mechanical Engineering</SelectItem>
                    <SelectItem value="ba">Business Administration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="batch">Batch Year</Label>
                <Input id="batch" placeholder="2024" />
              </div>
              <div>
                <Label htmlFor="email">Contact Email</Label>
                <Input id="email" type="email" placeholder="student@university.edu" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" />
              </div>
            </div>

            <div>
              <Label htmlFor="documents">Supporting Documents</Label>
              <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Upload transcripts, ID copy, and other documents</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Choose Files
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea 
                id="notes" 
                placeholder="Any additional information or special requests..."
                className="mt-2"
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => setShowSubmissionForm(false)}>
                Cancel
              </Button>
              <Button variant="academic" onClick={handleSubmitRequest}>
                <Send className="h-4 w-4" />
                Submit Request
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LocalCampusDashboard;