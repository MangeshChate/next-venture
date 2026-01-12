import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Jimbl - The Immune System for AI Data Pipelines",
  description: "Jimbl: Resilient, trustworthy foundations for RAG, LLMs, and agentic workflows.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Jimbl - The Immune System for AI Data Pipelines</title>
        <meta name="description" content="Jimbl: Resilient, trustworthy foundations for RAG, LLMs, and agentic workflows." />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
