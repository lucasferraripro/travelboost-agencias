import { memo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroBannerProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const HeroBannerComponent = ({ searchValue, onSearchChange }: HeroBannerProps) => {
  const { t } = useLanguage();

  return (
    <div className="relative mb-6 px-4">
      {/* Search Bar Container */}
      <div className="max-w-2xl mx-auto relative">
        <div className="relative">
          <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" aria-hidden="true" />
          <Input
            type="search"
            placeholder="Busque o destino que quer divulgar"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-14 pr-6 h-14 md:h-16 rounded-full bg-white shadow-xl border-2 border-primary/10 text-base md:text-lg text-foreground placeholder:text-muted-foreground focus-visible:ring-4 focus-visible:ring-primary/20 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};
export const HeroBanner = memo(HeroBannerComponent);
