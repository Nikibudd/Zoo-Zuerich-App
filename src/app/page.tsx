import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-soft from-primary-950 via-secondary-900 to-primary-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="font-display text-6xl font-bold text-white animate-fade-in">
            Discover Wildlife
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl animate-slide-up">
            Experience the majesty of the animal kingdom through our immersive and
            educational exhibits.
          </p>
          <Link href="/hello">
            <button 
              className="mt-8 px-8 py-3 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg shadow-soft transition-all duration-300 transform hover:scale-105"
              >
              Plan Your Visit
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Exhibits */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-display text-4xl font-semibold text-white mb-12 text-center">
          Featured Exhibits
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Big Cats",
              description: "Majestic lions, tigers, and panthers in their natural habitat",
              image: "/api/placeholder/400/300",
            },
            {
              title: "Arctic Zone",
              description: "Home to our penguin colony and polar research center",
              image: "/api/placeholder/400/300",
            },
            {
              title: "Rainforest",
              description: "Tropical paradise featuring rare and exotic species",
              image: "/api/placeholder/400/300",
            },
          ].map((exhibit, index) => (
            <div
              key={index}
              className="bg-neutral-900/50 rounded-xl overflow-hidden shadow-soft hover:transform hover:scale-105 transition-all duration-300"
            >
              <Image
                src={exhibit.image}
                alt={exhibit.title}
                width={400}
                height={300}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  {exhibit.title}
                </h3>
                <p className="text-neutral-300">{exhibit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "200+", label: "Species" },
            { number: "1000+", label: "Animals" },
            { number: "50", label: "Acres" },
            { number: "1M+", label: "Annual Visitors" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-primary-900/50 rounded-lg p-6 shadow-soft"
            >
              <div className="text-4xl font-bold text-secondary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-300 font-display">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-radial from-secondary-800 to-primary-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-neutral-200 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable journey through the animal kingdom.
            Book your tickets today and create lasting memories.
          </p>
          <button className="px-8 py-3 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg shadow-soft transition-all duration-300">
            Book Tickets
          </button>
        </div>
      </section>
    </main>
  );
}