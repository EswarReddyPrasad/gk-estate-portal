
import { useEffect, useRef, useState } from "react";
import { Building, Users, Award, Home } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix: string;
}

const stats: Stat[] = [
  {
    icon: Building,
    value: 25,
    label: "Years of Experience",
    suffix: "+",
  },
  {
    icon: Home,
    value: 30,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    icon: Users,
    value: 2500,
    label: "Happy Customers",
    suffix: "+",
  },
  {
    icon: Award,
    value: 15,
    label: "Awards Received",
    suffix: "+",
  },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[index] < stat.value) {
            newCounters[index] += 1;
          }
          return newCounters;
        });
      }, 80);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 bg-primary text-white"
    >
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className="text-secondary" size={24} />
                </div>
                <div className="text-4xl font-display font-semibold mb-2">
                  {counters[index]}
                  <span className="text-secondary">{stat.suffix}</span>
                </div>
                <p className="text-white/70">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
