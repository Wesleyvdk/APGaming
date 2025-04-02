export function NewsLoading() {
  return (
    <>
      <section className="py-10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="gaming-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-96 bg-ap-dark-lighter animate-pulse"></div>
              <div className="p-8 lg:p-12">
                <div className="h-5 w-32 bg-ap-dark-lighter animate-pulse rounded-lg mb-4"></div>
                <div className="h-10 w-3/4 bg-ap-dark-lighter animate-pulse rounded-lg mb-4"></div>
                <div className="h-6 w-48 bg-ap-dark-lighter animate-pulse rounded-lg mb-6"></div>
                <div className="h-12 w-40 bg-ap-dark-lighter animate-pulse rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 section-highlight relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="h-12 w-64 bg-ap-dark-lighter animate-pulse rounded-lg mx-auto mb-4"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-10 w-24 bg-ap-dark-lighter animate-pulse rounded-full"
              ></div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="gaming-card overflow-hidden">
                <div className="h-48 bg-ap-dark-lighter animate-pulse"></div>
                <div className="p-6">
                  <div className="h-5 w-3/4 bg-ap-dark-lighter animate-pulse rounded-lg mb-3"></div>
                  <div className="h-7 w-full bg-ap-dark-lighter animate-pulse rounded-lg mb-3"></div>
                  <div className="h-4 w-1/2 bg-ap-dark-lighter animate-pulse rounded-lg mb-4"></div>
                  <div className="h-20 w-full bg-ap-dark-lighter animate-pulse rounded-lg mb-4"></div>
                  <div className="h-6 w-1/3 bg-ap-dark-lighter animate-pulse rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
