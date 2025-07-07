import { cn } from "@/lib/utils";

type FooterProps = React.HTMLAttributes<HTMLElement>

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn("bg-gray-800 text-white py-4", className)} {...props}> 
      <div className="container mx-auto px-4 md:px-0">
        <p>© 2025 Naitex. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;