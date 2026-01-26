import NavbarWrapper from "@/components/navbar/NavbarWrapper";
import Footer from "@/components/shared/footer/Footer";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* // right side blur divs */}
      <NavbarWrapper />
      <main className="flex-grow bg-[#FAFAFA]">{children}</main>
      <Footer />
    </div>
  );
}


