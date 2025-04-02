export function PlayerDetailLoading() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 md:w-full md:h-96 mx-auto">
                <div className="absolute -inset-4 bg-ap-pink/20 rounded-3xl blur-xl"></div>
                <div className="w-full h-full bg-ap-dark-lighter animate-pulse rounded-lg relative z-10"></div>
              </div>
            </div>

            <div className="md:w-2/3 text-center md:text-left">
              <div className="h-8 w-32 bg-ap-dark-lighter animate-pulse rounded-full mb-4 mx-auto md:mx-0"></div>
              <div className="h-16 w-64 bg-ap-dark-lighter animate-pulse rounded-lg mb-2 mx-auto md:mx-0"></div>
              <div className="h-8 w-48 bg-ap-dark-lighter animate-pulse rounded-lg mb-6 mx-auto md:mx-0"></div>

              <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
                <div className="h-10 w-32 bg-ap-dark-lighter animate-pulse rounded-full"></div>
                <div className="h-10 w-32 bg-ap-dark-lighter animate-pulse rounded-full"></div>
              </div>

              <div className="mb-8">
                <div className="h-8 w-24 bg-ap-dark-lighter animate-pulse rounded-lg mb-4 mx-auto md:mx-0"></div>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="h-10 w-48 bg-ap-dark-lighter animate-pulse rounded-full"></div>
                  <div className="h-10 w-48 bg-ap-dark-lighter animate-pulse rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="h-8 w-32 bg-ap-dark-lighter animate-pulse rounded-lg mb-4 mx-auto md:mx-0"></div>
                <div className="flex gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-ap-dark-lighter animate-pulse"></div>
                  <div className="w-10 h-10 rounded-full bg-ap-dark-lighter animate-pulse"></div>
                  <div className="w-10 h-10 rounded-full bg-ap-dark-lighter animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 section-highlight relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-ap-dark-lighter animate-pulse rounded-lg mx-auto mb-4"></div>
          </div>

          <div className="gaming-card p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-ap-dark-lighter animate-pulse"></div>
            </div>
            <div className="h-8 w-48 bg-ap-dark-lighter animate-pulse rounded-lg mb-4 mx-auto"></div>
            <div className="h-4 w-full max-w-2xl bg-ap-dark-lighter animate-pulse rounded-lg mx-auto mb-2"></div>
            <div className="h-4 w-full max-w-2xl bg-ap-dark-lighter animate-pulse rounded-lg mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-ap-dark-lighter animate-pulse rounded-lg mx-auto mb-4"></div>
            <div className="h-4 w-full max-w-2xl bg-ap-dark-lighter animate-pulse rounded-lg mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="gaming-card overflow-hidden">
                <div className="h-48 bg-ap-dark-lighter animate-pulse"></div>
                <div className="p-6">
                  <div className="h-7 w-3/4 bg-ap-dark-lighter animate-pulse rounded-lg mb-2"></div>
                  <div className="h-5 w-1/2 bg-ap-dark-lighter animate-pulse rounded-lg mb-4"></div>
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
