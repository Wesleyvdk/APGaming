export function TeamDetailLoading() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="h-8 w-32 bg-ap-dark-lighter animate-pulse rounded-full mb-4"></div>
            <div className="h-16 w-64 bg-ap-dark-lighter animate-pulse rounded-lg mb-6"></div>
            <div className="h-6 w-48 bg-ap-dark-lighter animate-pulse rounded-lg"></div>
          </div>
        </div>
      </section>

      <section className="py-20 section-highlight relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-ap-dark-lighter animate-pulse rounded-lg mx-auto mb-4"></div>
            <div className="h-6 w-96 bg-ap-dark-lighter animate-pulse rounded-lg mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="gaming-card overflow-hidden">
                <div className="h-64 bg-ap-dark-lighter animate-pulse"></div>
                <div className="p-6">
                  <div className="h-7 w-3/4 bg-ap-dark-lighter animate-pulse rounded-lg mb-2"></div>
                  <div className="h-5 w-1/2 bg-ap-dark-lighter animate-pulse rounded-lg mb-2"></div>
                  <div className="h-5 w-1/3 bg-ap-dark-lighter animate-pulse rounded-lg mb-4"></div>
                  <div className="h-10 w-full bg-ap-dark-lighter animate-pulse rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
