import useCountUp from "@/hooks/useCountUp";

const stats = [
  { value: 500, suffix: "+", label: "Partners" },
  { value: 12, suffix: "M+", label: "Units Shipped" },
  { value: 98, suffix: "%", label: "On-Time Delivery" },
  { value: 24, suffix: "/7", label: "Support" },
];

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-heading text-gradient">
        {count}{suffix}
      </div>
      <p className="mt-2 text-muted-foreground font-body text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
};

const Stats = () => (
  <section className="py-20 border-y border-border bg-secondary/30">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
