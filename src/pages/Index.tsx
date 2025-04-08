import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Calendar, CheckCircle, Clock, Globe, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Building className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">RentalHub</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#features" className="text-gray-600 hover:text-primary">Features</a>
          <a href="#platforms" className="text-gray-600 hover:text-primary">Platforms</a>
          <a href="#pricing" className="text-gray-600 hover:text-primary">Pricing</a>
        </div>
        <Button variant="outline" className="hidden md:flex">
          Login
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24 px-4 md:px-0">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Streamline your short-term rental management with all-in-one efficiency
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Integrated with mainstream platforms. Automated tools and team accounts make managing large number of properties a snap.
          </p>
          <Button className="px-8 py-6 text-lg gap-2 rounded-full">
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Platform Integration */}
      <section id="platforms" className="container mx-auto py-16 px-4 md:px-0">
        <h2 className="text-3xl font-bold text-center mb-12">Integrated with leading platforms</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <span className="font-medium">Airbnb</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-red-100 p-4 rounded-full mb-4">
              <Building className="h-8 w-8 text-red-600" />
            </div>
            <span className="font-medium">VRBO</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Globe className="h-8 w-8 text-green-600" />
            </div>
            <span className="font-medium">Booking.com</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <Building className="h-8 w-8 text-purple-600" />
            </div>
            <span className="font-medium">Expedia</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful management features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Calendar className="h-10 w-10 text-primary" />}
              title="Unified Calendar"
              description="Manage all your bookings in one place with a centralized calendar view across all platforms."
            />
            <FeatureCard 
              icon={<Clock className="h-10 w-10 text-primary" />}
              title="Automated Messaging"
              description="Set up automated responses and check-in instructions to save time and improve guest experience."
            />
            <FeatureCard 
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Team Management"
              description="Add team members with custom permissions for cleaning staff, property managers, and more."
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto py-16 px-4 md:px-0">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why choose our platform?</h2>
          <div className="space-y-6">
            <BenefitItem text="Manage all your properties from a single dashboard" />
            <BenefitItem text="Sync calendars and avoid double bookings" />
            <BenefitItem text="Automate guest communications and reviews" />
            <BenefitItem text="Generate comprehensive performance reports" />
            <BenefitItem text="Scale your business with team collaboration tools" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to streamline your rental management?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of property managers who have simplified their operations and increased their revenue.
          </p>
          <Button variant="secondary" size="lg" className="px-8 py-6 text-lg gap-2 rounded-full">
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Building className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">RentalHub</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-gray-600 hover:text-primary">Terms</a>
              <a href="#" className="text-gray-600 hover:text-primary">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-primary">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} RentalHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitItem = ({ text }) => {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default Index;