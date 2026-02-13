import trueLegacyLogo from "@/assets/true-legacy-logo.png";

interface FooterProps {
  lang: "en" | "es";
}

const Footer = ({ lang }: FooterProps) => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <img src={trueLegacyLogo} alt="True Legacy" className="h-12 w-auto mx-auto mb-6" />
        <p className="text-muted-foreground font-body text-sm mb-2">
          Mehdi Cohen — True Legacy World | Enagic® Independent Distributor
        </p>
        <p className="text-muted-foreground font-body text-xs mb-4">
          ID# 37000004829
        </p>
        <div className="flex justify-center gap-6 text-muted-foreground text-xs font-body">
          <a href="https://truelegacyworld.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">truelegacyworld.com</a>
          <a href="https://www.youtube.com/@Mehdicohen" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">YouTube</a>
          <a href="mailto:emgsales@enagic-my.com" className="hover:text-accent transition-colors">Contact</a>
        </div>
        <p className="text-muted-foreground/50 font-body text-[10px] mt-8">
          © {new Date().getFullYear()} mehdicohen.com — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
