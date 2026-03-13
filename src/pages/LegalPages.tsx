import Layout from "@/components/Layout";
import { Shield, FileText, DollarSign, AlertCircle } from "lucide-react";

const LegalPage = ({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) => (
  <Layout>
    <section className="pt-32 pb-24 bg-gradient-to-b from-background via-secondary to-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass-card p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{title}</h1>
          </div>
          
          <div className="prose prose-sm md:prose-base max-w-none text-foreground/80 space-y-6 font-body leading-relaxed">
            {children}
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export const PrivacyPage = () => (
  <LegalPage title="Privacy Policy" icon={Shield}>
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary mb-6">
      <span>Last updated: February 2026</span>
    </div>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Information We Collect</h3>
    <p className="text-foreground/80">
      We collect information you provide directly, such as when you contact us by phone or email. This may include your name, phone number, email address, and details about your service issue.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h3>
    <p className="text-foreground/80">
      We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations. We never sell your personal information to third parties.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Data Protection</h3>
    <p className="text-foreground/80">
      We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is encrypted and stored securely.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Your Rights</h3>
    <p className="text-foreground/80">
      You have the right to access, update, or delete your personal information at any time. Contact us to exercise these rights.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Contact</h3>
    <p className="text-foreground/80">
      For privacy-related inquiries, contact us at <a href="mailto:privacy@universalwifisupport.com" className="text-primary hover:underline">privacy@universalwifisupport.com</a>.
    </p>
  </LegalPage>
);

export const TermsPage = () => (
  <LegalPage title="Terms of Service" icon={FileText}>
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary mb-6">
      <span>Last updated: February 2026</span>
    </div>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Service Description</h3>
    <p className="text-foreground/80">
      Universal WiFi Support provides independent troubleshooting guidance and support for internet and cable-related issues. We are not a replacement for your internet service provider and are not affiliated with any ISP or cable company.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Acceptance of Terms</h3>
    <p className="text-foreground/80">
      By using our services, you agree to these terms of service. If you do not agree, please do not use our services.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Service Limitations</h3>
    <p className="text-foreground/80">
      Our services are advisory in nature. We provide guidance and information but cannot directly modify or repair your internet service, equipment, or provider account.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Independent Third-Party Disclaimer</h3>
    <p className="text-foreground/80">
      We are an independent third-party service. We are not affiliated with, endorsed by, or directly connected to any internet service provider or cable company. All provider trademarks are property of their respective owners.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Limitation of Liability</h3>
    <p className="text-foreground/80">
      Our liability is limited to the amount paid for our services. We are not responsible for any issues arising from your ISP, cable provider, or equipment failures.
    </p>
  </LegalPage>
);

export const RefundPage = () => (
  <LegalPage title="Refund Policy" icon={DollarSign}>
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary mb-6">
      <span>Last updated: February 2026</span>
    </div>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Our Guarantee</h3>
    <p className="text-foreground/80">
      If we are unable to resolve your issue or provide meaningful guidance, you are entitled to a full refund of any service fees paid. Your satisfaction is our priority.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Eligibility</h3>
    <p className="text-foreground/80">
      Refund requests must be made within 30 days of service. To be eligible, you must have attempted to work with our advisors in good faith to resolve your issue.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">How to Request a Refund</h3>
    <p className="text-foreground/80">
      Contact us within 30 days of your service at <a href="tel:+18337084183" className="text-primary hover:underline">(833) 708-4183</a> or <a href="mailto:refunds@universalwifisupport.com" className="text-primary hover:underline">refunds@universalwifisupport.com</a> with your transaction details and reason for the refund request.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Processing Time</h3>
    <p className="text-foreground/80">
      Approved refunds are typically processed within 5-10 business days. The refund will be issued to the original payment method used for the transaction.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Non-Refundable Items</h3>
    <p className="text-foreground/80">
      Services that have been successfully completed and resolved issues are generally not eligible for refunds unless there was a significant service failure on our part.
    </p>
  </LegalPage>
);

export const DisclaimerPage = () => (
  <LegalPage title="Disclaimer" icon={AlertCircle}>
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary mb-6">
      <span>Last updated: February 2026</span>
    </div>
    
    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-8">
      <h3 className="font-display text-lg font-bold text-foreground mb-2 flex items-center gap-2">
        <AlertCircle className="h-5 w-5 text-yellow-500" />
        Important Notice
      </h3>
      <p className="text-foreground/80 text-sm">
        Universal WiFi Support is an independent third-party assistance service. We are NOT affiliated with, endorsed by, or directly connected to any internet service provider, cable company, or telecommunications company.
      </p>
    </div>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Independent Service</h3>
    <p className="text-foreground/80">
      We provide independent, unbiased guidance and support. We do not represent any specific ISP or cable provider. Our advisors are not employees or agents of any telecommunications company.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">No Guarantee of Results</h3>
    <p className="text-foreground/80">
      While we strive to resolve every issue and provide helpful guidance, we cannot guarantee results as many factors depend on your specific provider, equipment, network infrastructure, and circumstances beyond our control.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Advisory Services Only</h3>
    <p className="text-foreground/80">
      Our services are advisory and informational in nature. We provide troubleshooting guidance, but we cannot directly access, modify, or repair your service, equipment, or provider account.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Third-Party Trademarks</h3>
    <p className="text-foreground/80">
      Any trademarks, service marks, or brand names referenced on this site are the property of their respective owners. Use of these marks does not imply any affiliation with or endorsement by those companies.
    </p>
    
    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Contact Your Provider</h3>
    <p className="text-foreground/80">
      For account-specific issues, billing disputes, or service modifications, you may need to contact your internet or cable provider directly. We can help guide you through that process.
    </p>
  </LegalPage>
);
