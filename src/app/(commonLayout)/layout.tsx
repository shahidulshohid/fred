import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* // right side blur divs */}
      <Navbar />
      <main className="flex-grow bg-[#F6FAFE]">{children}</main>
      <Footer />
    </div>
  );
}


