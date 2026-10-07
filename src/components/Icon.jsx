import {
  GraduationCap,
  Compass,
  Globe,
  HeartHandshake,
  Stethoscope,
  Briefcase,
  Trophy,
  Laptop,
  Wifi,
  Hand,
  UserRound,
  Handshake,
  Heart,
} from "lucide-react";

const icons = {
  GraduationCap,
  Compass,
  Globe,
  HeartHandshake,
  Stethoscope,
  Briefcase,
  Trophy,
  Laptop,
  Wifi,
  Hand,
  UserRound,
  Handshake,
  Heart,
};

export default function Icon({ name, ...props }) {
  const Component = icons[name];
  return Component ? <Component {...props} /> : null;
}