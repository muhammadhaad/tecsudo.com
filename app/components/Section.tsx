import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "primary" | "secondary";
}

export default function Section({
  id,
  children,
  className = "",
  background = "primary",
}: SectionProps) {
  const bgColor = background === "primary" ? "bg-[#232B32]" : "bg-[#2d3741]";

  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${bgColor} ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
