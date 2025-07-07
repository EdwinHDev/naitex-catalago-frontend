import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        { children }
      </main>
      <Footer className="mt-10" />
    </div>
  );
};

export default Layout;
