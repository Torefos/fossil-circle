import React from "react";
import Logo from "../components/Logo";
import TipCard from "../components/TipCard";
import DownloadLink from "../components/DownloadLink";

const Index = () => {
  const tips = [
    {
      title: "Keyboard Shortcuts",
      description: "Master the essential keyboard shortcuts to boost your productivity.",
    },
    {
      title: "File Management",
      description: "Learn efficient ways to organize and manage your files.",
    },
    {
      title: "Security Tips",
      description: "Keep your system secure with these important security practices.",
    },
  ];

  const downloads = [
    {
      title: "Essential Tools Pack",
      url: "#",
      description: "A curated collection of must-have development tools.",
    },
    {
      title: "Quick Start Guide",
      url: "#",
      description: "Get started quickly with our comprehensive guide.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Logo />
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-16">
        <section className="max-w-2xl mx-auto text-center mb-16 animate-fade-up">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Fossdl
          </h1>
          <p className="text-xl text-gray-600">
            Your source for tech tips, tricks, and essential downloads
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Tips & Tricks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <TipCard key={index} {...tip} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Downloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {downloads.map((download, index) => (
              <DownloadLink key={index} {...download} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;