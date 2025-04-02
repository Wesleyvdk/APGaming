export function NewsArticleLoading() {
  return (
    <>
      <section className="pt-32 pb-10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="h-6 w-32 bg-ap-dark-lighter animate-pulse rounded-lg mb-8"></div>

          <div className="flex gap-2 mb-4">
            <div className="h-6 w-20 bg-ap-dark-lighter animate-pulse rounded-full"></div>
            <div className="h-6 w-20 bg-ap-dark-lighter animate-pulse rounded-full"></div>
          </div>

          <div className="h-12 w-3/4 bg-ap-dark-lighter animate-pulse rounded-lg mb-6"></div>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-ap-dark-lighter mr-3"></div>
              <div className="h-6 w-32 bg-ap-dark-lighter animate-pulse rounded-lg"></div>
            </div>

            <div className="h-6 w-32 bg-ap-dark-lighter animate-pulse rounded-lg"></div>
          </div>
        </div>
      </section>

      <section className="py-10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="gaming-card overflow-hidden">
            <div className="h-96 bg-ap-dark-lighter animate-pulse"></div>

            <div className="p-8 md:p-12">
              <div className="space-y-4">
                <div className="h-6 w-full bg-ap-dark-lighter animate-pulse rounded-lg"></div>
                <div className="h-6 w-full bg-ap-dark-lighter animate-pulse rounded-lg"></div>
                <div className="h-6 w-3/4 bg-ap-dark-lighter animate-pulse rounded-lg"></div>
                <div className="h-6 w-full bg-ap-dark-lighter animate-pulse rounded-lg"></div>
                <div className="h-6 w-5/6 bg-ap-dark-lighter animate-pulse rounded-lg"></div>
                <div className="h-6 w-full bg-ap-dark-lighter animate-pulse rounded-lg"></div>
                <div className="h-6 w-2/3 bg-ap-dark-lighter animate-pulse rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
