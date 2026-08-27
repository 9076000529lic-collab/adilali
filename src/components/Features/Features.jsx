import { ShieldCheck, Truck, RotateCcw, Headphones } from "lucide-react";

const features = [
  [Truck, "Fast delivery", "Reliable delivery to your doorstep."],
  [ShieldCheck, "Secure checkout", "Your payment and data stay protected."],
  [RotateCcw, "Easy returns", "Simple returns on eligible orders."],
  [Headphones, "Premium support", "Real people, ready to help."]
];

export default function Features() {
  return (
    <section className="features">
      {features.map(([Icon, title, text]) => (
        <div className="feature" key={title}>
          <Icon size={23} strokeWidth={1.5} />
          <div><h3>{title}</h3><p>{text}</p></div>
        </div>
      ))}
    </section>
  );
}