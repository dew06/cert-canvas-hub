import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Shield, Building2, CheckCircle2, Users, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const localCampuses = [
    {
      id: "campus-b",
      name: "Campus B",
      description: "Engineering and Technology Campus",
      location: "North District"
    },
    {
      id: "campus-c", 
      name: "Campus C",
      description: "Medical Sciences Campus",
      location: "Central District"
    },
    {
      id: "campus-d",
      name: "Campus D", 
      description: "Business and Management Campus",
      location: "South District"
    },
    {
      id: "campus-e",
      name: "Campus E",
      description: "Arts and Humanities Campus", 
      location: "East District"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/5">
      {/* Header */}
      <header className="border-b bg-card/95 backdrop-blur-sm shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-academic rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">CertVerify</h1>
                <p className="text-sm text-muted-foreground">University Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/verify">
                <Button variant="outline" size="sm">
                  <CheckCircle2 className="h-4 w-4" />
                  Quick Verify
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              University Certificate
              <span className="bg-gradient-academic bg-clip-text text-transparent block">
                Verification Portal
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Secure, reliable, and transparent certificate verification system for academic credentials across all university campuses.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Secure Verification</h3>
              <p className="text-sm text-muted-foreground">Advanced encryption and digital signatures ensure certificate authenticity</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Multi-Campus</h3>
              <p className="text-sm text-muted-foreground">Unified system across all university campuses and departments</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Instant Results</h3>
              <p className="text-sm text-muted-foreground">Real-time verification with immediate status updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus A Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-glow border-primary/20 bg-gradient-to-r from-card to-primary/5">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-academic rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl text-primary">Campus A - Central Administration</CardTitle>
                <CardDescription className="text-lg">
                  Main administrative hub for certificate verification and approval processes
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Certificates Processed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">System Availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                  </div>
                </div>
                <Link to="/campus-a">
                  <Button variant="academic" size="xl" className="shadow-glow">
                    <Building2 className="h-5 w-5" />
                    Log in as Campus A Admin
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Campuses Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Local Campuses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access your campus-specific portal to submit requests and manage certificates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localCampuses.map((campus, index) => (
              <Card key={campus.id} className="shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{campus.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">{campus.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 min-h-[3rem]">
                    {campus.description}
                  </CardDescription>
                  <Link to={`/${campus.id}`}>
                    <Button variant="campus" className="w-full">
                      Login to {campus.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Public Verification Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-accent/5 to-accent/10">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-certificate border-accent/20">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-certificate rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-3xl">Public Certificate Validation</CardTitle>
                <CardDescription className="text-lg">
                  Verify the authenticity of any university certificate instantly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-8">
                  Upload a certificate file to verify its authenticity and view detailed information about the credential.
                </p>
                <Link to="/verify">
                  <Button variant="certificate" size="xl" className="shadow-certificate">
                    <FileCheck className="h-5 w-5" />
                    Verify Certificate
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="font-bold text-lg">CertVerify</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Secure university certificate verification platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>support@cert-verify.com</li>
                <li>+1 (555) 123-4567</li>
                <li>24/7 Technical Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Security</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>ISO 27001 Certified</li>
                <li>256-bit Encryption</li>
                <li>Regular Security Audits</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 University Certificate Verification Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;