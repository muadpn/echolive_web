import { Check } from "lucide-react";
import { Button } from "../ui/button";

const PRICING_PLANS = [
  {
    id: "free",
    name: "Developer",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "1 website",
      "Up to 1,000 monthly visitors",
      "Basic analytics",
      "Community support",
    ],
    buttonText: "Get Started",
    buttonVariant: "secondary",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$19",
    description: "For growing websites",
    features: [
      "Up to 5 websites",
      "Unlimited monthly visitors",
      "Advanced analytics",
      "Priority email support",
      "Custom domains",
    ],
    buttonText: "Upgrade Now",
    buttonVariant: "primary",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications",
    features: [
      "Unlimited websites",
      "Unlimited monthly visitors",
      "Custom analytics",
      "24/7 phone support",
      "SLA guarantee",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "secondary",
  },
];

const SHARED_FEATURES = [
  "Unlimited API calls",
  "99.9% uptime SLA",
  "Enterprise security",
];

function PriceTag({ price }: { price: string }) {
  return (
    <div className="flex items-baseline">
      <span className="text-5xl font-bold">{price}</span>
      {price !== "Custom" && (
        <span className="ml-2 text-muted-foreground">/month</span>
      )}
    </div>
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="mb-8 flex-grow space-y-4">
      {features.map((feature) => (
        <li key={feature} className="flex items-center">
          <Check className="mr-2 h-5 w-5 text-primary" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function PricingCard({ plan }: { plan: (typeof PRICING_PLANS)[number] }) {
  const buttonStyles: { [key: string]: string } = {
    primary: "bg-primary hover:bg-primary/90 text-primary-foreground",
    secondary: "bg-white/10 hover:bg-white/20 text-white border-0",
  };

  return (
    <div className="group relative">
      <div
        className={`absolute inset-0 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl ${
          plan.popular
            ? "bg-gradient-to-r from-primary to-primary/50 opacity-20"
            : "bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-0"
        }`}
      />
      <div className="relative rounded-3xl border border-primary/20 bg-black/40 p-8 backdrop-blur-xl transition-colors duration-300 hover:border-primary">
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
            Most Popular
          </div>
        )}
        <div className="flex h-full flex-col">
          <div className="mb-8">
            <div className="mb-4 font-semibold text-muted-foreground">
              {plan.name}
            </div>
            <PriceTag price={plan.price} />
            <p className="mt-4 text-muted-foreground">{plan.description}</p>
          </div>
          <FeatureList features={plan.features} />
          <Button className={`w-full ${buttonStyles[plan.buttonVariant]}`}>
            {plan.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Simple, Transparent <span className="text-primary/90">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Start for free, scale as you grow
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            All plans include:{" "}
            {SHARED_FEATURES.map((feature, index) => (
              <span key={feature}>
                {index > 0 && " • "}
                <span className="text-primary">{feature}</span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
