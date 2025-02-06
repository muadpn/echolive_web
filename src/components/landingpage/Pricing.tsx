import { Check } from "lucide-react";
import { Button } from "../ui/button";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background " />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Simple, Transparent{" "}
            <span className="text-primary/90">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Start for free, scale as you grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="relative group ">
            <div className="absolute   inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-0" />
            <div className="relative  bg-black/40 border border-primary/20 backdrop-blur-xl rounded-3xl p-8 hover:border-primary transition-colors duration-300 ">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <div className="font-semibold text-muted-foreground mb-4">
                    Developer
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">$0</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    Perfect for getting started
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>1 website</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Up to 1,000 monthly visitors</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Community support</span>
                  </li>
                </ul>

                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-0">
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-3xl blur-xl opacity-20 group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-black/40 border border-primary/20 backdrop-blur-xl rounded-3xl p-8 hover:border-primary  transition-colors duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <div className="font-semibold text-muted-foreground mb-4">
                    Pro
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">$19</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    For growing websites
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Up to 5 websites</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Unlimited monthly visitors</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Priority email support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Custom domains</span>
                  </li>
                </ul>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Upgrade Now
                </Button>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-0" />
            <div className="relative bg-black/40 border border-primary/20 backdrop-blur-xl rounded-3xl p-8 hover:border-primary  transition-colors duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <div className="font-semibold text-muted-foreground mb-4">
                    Enterprise
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">Custom</span>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    For large-scale applications
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Unlimited websites</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Unlimited monthly visitors</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Custom analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>24/7 phone support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>SLA guarantee</span>
                  </li>
                </ul>

                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-0">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            All plans include:{" "}
            <span className="text-primary">Unlimited API calls</span> •{" "}
            <span className="text-primary">99.9% uptime SLA</span> •{" "}
            <span className="text-primary">Enterprise security</span>
          </p>
        </div>
      </div>
    </section>
  );
}
