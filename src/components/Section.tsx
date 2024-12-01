import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ title, children, className }: SectionProps) => {
  return (
    <section className={cn("mb-8 animate-fade-up", className)}>
      <h2 className="text-2xl font-bold text-accent mb-4 uppercase">{title}</h2>
      {children}
    </section>
  );
};

export default Section;