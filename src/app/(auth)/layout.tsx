
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Healixity",
    template: "%s | Accounts",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}

