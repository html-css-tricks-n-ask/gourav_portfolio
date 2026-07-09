export type StatItem = {
  value: string;
  label: string;
  suffix?: string;
};

export type Achievement = {
  year: string;
  tournament: string;
  location: string;
  position: string;
  medal: string;
  description: string;
};

export type ResultRow = {
  tournament: string;
  location: string;
  category: string;
  score: string;
  position: string;
  medal: string;
  date: string;
  level: string;
};

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
};

export type EquipmentItem = {
  name: string;
  brand: string;
  model: string;
  description: string;
  image: string;
};

export type CoachingProgram = {
  title: string;
  level: string;
  description: string;
  cta: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const stats: StatItem[] = [
  { value: "6", label: "Years Experience", suffix: "+" },
  { value: "300", label: "Students Coached" },
  { value: "18", label: "National Medals" },
  { value: "45", label: "Competitions" },
  { value: "26", label: "Podium Finishes" },
  { value: "4", label: "National Ranking" },
];

export const achievements: Achievement[] = [
  {
    year: "2014",
    tournament: "National Youth Championship",
    location: "Jaipur",
    position: "1st",
    medal: "Gold",
    description: "Set a youth national record in the 70m recurve category.",
  },
  {
    year: "2017",
    tournament: "Senior Nationals",
    location: "Bengaluru",
    position: "2nd",
    medal: "Silver",
    description: "Delivered a clutch final round under pressure to secure silver.",
  },
  {
    year: "2020",
    tournament: "All India Inter-State Meet",
    location: "Delhi",
    position: "1st",
    medal: "Gold",
    description: "Led the team to a winning streak with a composed final series.",
  },
  {
    year: "2023",
    tournament: "National Coach Development Camp",
    location: "Panchkula",
    position: "Featured",
    medal: "Mentor",
    description: "Shared performance strategy and coaching methods with emerging archers.",
  },
];

export const results: ResultRow[] = [
  {
    tournament: "National Open Cup",
    location: "Lucknow",
    category: "Recurve",
    score: "287/300",
    position: "1st",
    medal: "Gold",
    date: "2024-03-10",
    level: "National",
  },
  {
    tournament: "State Trials",
    location: "Chandigarh",
    category: "Compound",
    score: "294/300",
    position: "2nd",
    medal: "Silver",
    date: "2024-01-18",
    level: "State",
  },
  {
    tournament: "School Games",
    location: "Noida",
    category: "Recurve",
    score: "281/300",
    position: "3rd",
    medal: "Bronze",
    date: "2023-11-25",
    level: "School",
  },
];

export const gallery: GalleryItem[] = [
  {
    title: "Training Under Lights",
    category: "Training",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Competition Focus",
    category: "Competition",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Award Ceremony",
    category: "Awards",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Pre-Flight Routine",
    category: "Practice",
    image:
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1000&q=80",
  },
];

export const equipment: EquipmentItem[] = [
  {
    name: "Bow",
    brand: "Hoyt",
    model: "Carbon Element",
    description: "Engineered for consistency and clean release under pressure.",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Arrows",
    brand: "Easton",
    model: "Axis 5mm",
    description: "Precision shafts tuned for stability and smooth flight.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sight",
    brand: "Spot Hogg",
    model: "Hooter Shooter",
    description: "Fine-tuned sighting for repeatable shot placement.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
];

export const coachingPrograms: CoachingProgram[] = [
  {
    title: "Beginner", level: "Foundation",
    description: "A structured introduction to posture, form, and mental preparation.",
    cta: "Start Learning",
  },
  {
    title: "Intermediate", level: "Performance",
    description: "Advanced technique work, shot routines, and competition mindset.",
    cta: "Elevate Training",
  },
  {
    title: "Advanced", level: "Elite",
    description: "Precision training for athletes preparing for national-level events.",
    cta: "Book a Session",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Gaurav instills calm, precision, and confidence in every student.",
    author: "Aarav Sharma",
    role: "Student",
  },
  {
    quote: "His coaching blends discipline with patience in a way that transforms performance.",
    author: "Meera Saini",
    role: "Parent",
  },
  {
    quote: "A rare coach who understands both the science and spirit of the sport.",
    author: "Rajeev Bhatia",
    role: "Fellow Coach",
  },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Results", href: "#results" },
  { label: "Coaching", href: "#coaching" },
  { label: "Contact", href: "#contact" },
];
