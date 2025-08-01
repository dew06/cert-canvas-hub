import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  CheckCircle2, 
  XCircle, 
  FileCheck, 
  Hash,
  Calendar,
  User,
  GraduationCap,
  Building2,
  Shield,
  AlertTriangle,
  Mail,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const VerificationPage = () => {
  const { toast } = useToast();
  const [dragActive, setDragActive] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF file only.",
        variant: "destructive"
      });
      return;
    }

    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      // Mock verification result (you can randomize this for demo)
      const isValid = Math.random() > 0.3; // 70% chance of being valid
      
      if (isValid) {
        setVerificationResult({
          valid: true,
          studentName: "John Doe",
          studentId: "STU-2024-001",
          program: "Computer Science",
          campus: "Campus B",
          issueDate: "2024-01-15",
          hashValue: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
          certificateId: "CERT-2024-CS-001"
        });
        toast({
          title: "Certificate Verified",
          description: "This certificate is authentic and valid.",
        });
      } else {
        setVerificationResult({
          valid: false,
          reason: "Certificate not found in university database or has been tampered with."
        });
        toast({
          title: "Verification Failed",
          description: "This certificate could not be verified.",
          variant: "destructive"
        });
      }
      setIsVerifying(false);
    }, 3000);
  };

  const handleContactSubmit = () => {
    toast({
      title: "Message Sent",
      description: "Your inquiry has been submitted. We'll respond within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/5">
      {/* Header */}
      <header className="border-b bg-card/95 backdrop-blur-sm shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-academic rounded-lg flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Certificate Verification</h1>
                <p className="text-sm text-muted-foreground">verify.cert-verify.com</p>
              </div>
            </Link>
            <Link to="/">
              <Button variant="outline">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-certificate rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-accent-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Verify Your
              <span className="bg-gradient-certificate bg-clip-text text-transparent block">
                University Certificate
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload your certificate PDF to instantly verify its authenticity through our secure blockchain-based verification system.
            </p>
          </div>

          {/* Upload Section */}
          <Card className="shadow-certificate border-accent/20 mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Upload Certificate for Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                  dragActive 
                    ? 'border-accent bg-accent/10' 
                    : 'border-border hover:border-accent/50 hover:bg-accent/5'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="mb-6">
                  <Upload className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Drag & Drop Your Certificate</h3>
                  <p className="text-muted-foreground">
                    Or click to browse and select your PDF certificate file
                  </p>
                </div>
                
                <Button 
                  variant="certificate" 
                  size="lg"
                  onClick={() => document.getElementById('fileInput')?.click()}
                  disabled={isVerifying}
                >
                  {isVerifying ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Upload className="h-5 w-5" />
                      Choose PDF File
                    </>
                  )}
                </Button>
                
                <input
                  id="fileInput"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                />
                
                <div className="mt-6 text-sm text-muted-foreground">
                  <p>• PDF files only • Maximum size: 10MB</p>
                  <p>• All uploads are secure and automatically deleted after verification</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verification Result */}
          {verificationResult && (
            <Card className={`shadow-glow mb-8 ${
              verificationResult.valid 
                ? 'border-success/50 bg-success/5' 
                : 'border-destructive/50 bg-destructive/5'
            }`}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  {verificationResult.valid ? (
                    <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-success" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center">
                      <XCircle className="h-6 w-6 text-destructive" />
                    </div>
                  )}
                  <div>
                    <CardTitle className={verificationResult.valid ? 'text-success' : 'text-destructive'}>
                      {verificationResult.valid ? 'Certificate Verified ✓' : 'Verification Failed ✗'}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {verificationResult.valid 
                        ? 'This certificate is authentic and issued by the university'
                        : 'This certificate could not be verified as authentic'
                      }
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              {verificationResult.valid ? (
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Student Name</p>
                          <p className="text-sm text-muted-foreground">{verificationResult.studentName}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <GraduationCap className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Program</p>
                          <p className="text-sm text-muted-foreground">{verificationResult.program}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Building2 className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Campus</p>
                          <p className="text-sm text-muted-foreground">{verificationResult.campus}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Issue Date</p>
                          <p className="text-sm text-muted-foreground">{verificationResult.issueDate}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <FileCheck className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Certificate ID</p>
                          <p className="text-sm text-muted-foreground font-mono">{verificationResult.certificateId}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Hash className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Digital Signature</p>
                          <p className="text-xs text-muted-foreground font-mono break-all">
                            {verificationResult.hashValue}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-success" />
                      <span className="text-sm font-medium text-success">Verification Details</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      This certificate has been verified against the university's secure database. 
                      The digital signature matches our records and confirms authenticity.
                    </p>
                  </div>
                </CardContent>
              ) : (
                <CardContent>
                  <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                      <span className="text-sm font-medium text-destructive">Verification Failed</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {verificationResult.reason}
                    </p>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>• The certificate may not be issued by this university</p>
                      <p>• The document may have been modified or tampered with</p>
                      <p>• The certificate may be expired or revoked</p>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          )}

          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Need Help with Verification?</CardTitle>
              <p className="text-muted-foreground">
                If you're having issues with certificate verification or have questions, please contact us.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="contactName">Full Name</Label>
                  <Input id="contactName" placeholder="Enter your full name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="contactEmail">Email Address</Label>
                  <Input id="contactEmail" type="email" placeholder="your@email.com" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="contactPhone">Phone Number</Label>
                  <Input id="contactPhone" placeholder="+1 (555) 123-4567" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="issueType">Issue Type</Label>
                  <Input id="issueType" placeholder="e.g., Verification Failed" className="mt-2" />
                </div>
              </div>
              
              <div className="mt-6">
                <Label htmlFor="issueDescription">Issue Description</Label>
                <Textarea 
                  id="issueDescription" 
                  placeholder="Please describe your issue or question in detail..."
                  className="mt-2 min-h-32"
                />
              </div>
              
              <Button variant="academic" className="mt-6" onClick={handleContactSubmit}>
                <Mail className="h-4 w-4" />
                Submit Inquiry
              </Button>
            </CardContent>
          </Card>

          {/* Security Information */}
          <div className="mt-12 text-center">
            <Card className="shadow-card bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-semibold">Secure & Private</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">256-bit Encryption</h4>
                    <p>All uploads are protected with bank-level security encryption</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Auto-Delete</h4>
                    <p>Files are automatically deleted after verification process</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">No Storage</h4>
                    <p>We never store or keep copies of your personal documents</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;