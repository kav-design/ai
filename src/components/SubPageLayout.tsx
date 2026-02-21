import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SubPageLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mb-12 text-lg text-body">{subtitle}</p>
          )}
          <div className="prose-milo">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
