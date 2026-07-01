import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesArrowCards from '@/components/sections/features/FeaturesArrowCards';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import PricingCenteredCards from '@/components/sections/pricing/PricingCenteredCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import { Award, Building, Shield, Star, Users, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardTiltedCarousel
      tag="Revolutionize Your Workflow"
      title="Join the Elite Ranks of AI Assistants"
      description="Apply for premium roles in artificial intelligence. Get access to exclusive tools, networking, and high-paying projects with our tiered membership."
      primaryButton={{
        text: "Apply Now",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Explore Plans",
        href: "#pricing",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/glowing-blue-wave-pattern-ignites-futuristic-technology-generated-by-ai_188544-18502.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blue-technology-background_1017-3288.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-abstract-landscape-flowing-dots_1048-13342.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/data-center-technician-using-artificial-intelligence-tablet-close-up_482257-119873.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-network-communications-background-with-plexus-design_1048-18865.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-modern-particle-design-background_1048-14927.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesArrowCards
      tag="Our Core Advantages"
      title="Empowering Your AI Career"
      description="We bridge the gap between talented AI assistants and top-tier companies seeking innovation."
      items={[
        {
          title: "Advanced Matching",
          tags: [
            "AI-Driven",
            "Precision",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/robot-hand-finger-background-ai-technology_53876-129766.jpg",
        },
        {
          title: "Networking Hub",
          tags: [
            "Community",
            "Global",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/technology-polygonal-blue-background-abstract-low-poly-connected-with-dots-lines_90220-494.jpg",
        },
        {
          title: "Career Insights",
          tags: [
            "Analytics",
            "Strategy",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/big-data-cybier-security-database-abstract-concept_1194-638739.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingCenteredCards
      tag="Choose Your Path"
      title="Flexible Membership Plans"
      description="Unlock your potential with our basic and premium access tiers."
      plans={[
        {
          tag: "Basic",
          price: "$5",
          description: "Perfect for starters.",
          features: [
            "Standard job listing access",
            "Community forum access",
            "Weekly email updates",
          ],
          primaryButton: {
            text: "Get Started",
            href: "#contact",
          },
        },
        {
          tag: "Premium",
          price: "$15",
          description: "For high-performers.",
          features: [
            "Priority job applications",
            "Direct recruiter networking",
            "Exclusive AI tool training",
            "Advanced performance analytics",
          ],
          primaryButton: {
            text: "Go Premium",
            href: "#contact",
          },
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Why Us?"
      title="Empowering the AI Workforce"
      description="We are dedicated to building a smarter, more connected AI ecosystem. Join us as we redefine the future of intelligent collaboration."
      items={[
        {
          icon: Zap,
          title: "Fast Processing",
          description: "Quick application reviews.",
        },
        {
          icon: Shield,
          title: "Secured Data",
          description: "Your info is safe.",
        },
        {
          icon: Award,
          title: "Verified Roles",
          description: "Hand-picked opportunities.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/robot-hand-3d-ai-technology_53876-129779.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Our Community"
      title="Success Stories"
      description="Hear from professionals who have elevated their careers."
      testimonials={[
        {
          name: "Alex R.",
          role: "AI Specialist",
          quote: "The premium tier helped me land my dream role in 2 weeks.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-employee-happy-be-back-work_23-2148727616.jpg",
        },
        {
          name: "Sarah K.",
          role: "Product Lead",
          quote: "Unparalleled networking opportunities in the industry.",
          imageSrc: "http://img.b2bpic.net/free-photo/successful-entrepreneur-working-financial-forecasts-his-desk_482257-123891.jpg",
        },
        {
          name: "Mark D.",
          role: "Data Scientist",
          quote: "The platform interface is intuitive and efficient.",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-young-businesswoman-posing_329181-11390.jpg",
        },
        {
          name: "Elena V.",
          role: "AI Architect",
          quote: "High quality roles matched perfectly with my skill set.",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-male-student-wears-spectacles-cap-jacket-has-serious-expression_273609-8692.jpg",
        },
        {
          name: "James L.",
          role: "Developer",
          quote: "Well worth the $15 investment.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="Our Impact"
      title="Real-World Results"
      description="The data behind our commitment to excellence."
      metrics={[
        {
          icon: Users,
          title: "Successful Placements",
          value: "2500+",
        },
        {
          icon: Building,
          title: "Companies Connected",
          value: "150+",
        },
        {
          icon: Star,
          title: "Avg Satisfaction",
          value: "4.9/5",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Common Questions"
      title="Everything You Need to Know"
      description="Have questions about our application process? Check our FAQs."
      items={[
        {
          question: "Can I upgrade my plan anytime?",
          answer: "Yes, you can upgrade from basic to premium at any moment via your user portal.",
        },
        {
          question: "Is the application free?",
          answer: "The application process itself is free, but the paywall unlocks premium features and direct support.",
        },
        {
          question: "Are jobs verified?",
          answer: "All companies and job listings undergo a rigorous verification process before being posted.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/global-communication-phone-wallpaper-business-network-design_53876-160272.jpg"
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started Today"
      text="Ready to launch your AI career? Secure your spot today."
      primaryButton={{
        text: "Submit Application",
        href: "#",
      }}
      secondaryButton={{
        text: "Contact Support",
        href: "#",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
