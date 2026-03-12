import { Link } from "react-router-dom";
import { Shield, FileText, AlertCircle } from "lucide-react";

const ComplianceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass-card-light p-10">
          <Shield className="h-10 w-10 text-primary mx-auto mb-6" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Transparency & Compliance
          </h2>
          
          <div className="space-y-6 text-sm text-muted-foreground">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-500" />
                Important Disclosure
              </h3>
              <p className="leading-relaxed">
                <strong>Universal WiFi Support is an independent third-party service assistance provider.</strong> We are not affiliated with, authorized by, or endorsed by any internet, cable, or streaming service provider. We are not an Internet Service Provider (ISP). We do not sell internet or cable subscriptions. Our role is limited to independent guidance and informational assistance only.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-5">
                <h4 className="font-semibold text-foreground mb-2">What We Do</h4>
                <ul className="space-y-2 text-xs">
                  <li>• Provide informational guidance on connectivity issues</li>
                  <li>• Help users understand service options</li>
                  <li>• Offer general troubleshooting support</li>
                  <li>• Assist with navigating service provider processes</li>
                </ul>
              </div>
              
              <div className="border border-border rounded-lg p-5">
                <h4 className="font-semibold text-foreground mb-2">What We Do NOT Do</h4>
                <ul className="space-y-2 text-xs">
                  <li>• Provide internet or cable services</li>
                  <li>• Represent or partner with any provider</li>
                  <li>• Offer official customer support</li>
                  <li>• Make guarantees about technical fixes</li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="text-xs italic">
                Brand names, if mentioned anywhere on this site, are used strictly for informational purposes only and do not imply endorsement or affiliation.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-6 border-t border-border">
            <Link to="/privacy" className="flex items-center gap-2 text-sm text-primary hover:underline">
              <FileText className="h-4 w-4" /> Privacy Policy
            </Link>
            <Link to="/terms" className="flex items-center gap-2 text-sm text-primary hover:underline">
              <FileText className="h-4 w-4" /> Terms of Service
            </Link>
            <Link to="/refund" className="flex items-center gap-2 text-sm text-primary hover:underline">
              <FileText className="h-4 w-4" /> Refund Policy
            </Link>
            <Link to="/disclaimer" className="flex items-center gap-2 text-sm text-primary hover:underline">
              <AlertCircle className="h-4 w-4" /> Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
