import React from 'react'

function page() {
  return (
    <div className='bg-white'>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <section className="relative px-8">
            <div className="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">
              <div className="my-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full">
                <h1>About Us</h1>
                <p>
                  <span>
                    We are a travel blog featuring travel tips, guides, and
                    photography from around the world. Whether you need guidance
                    for your first trip, or you&apos;re a seasoned traveler
                    looking for destination inspiration, you&apos;ve come to the
                    right place!
                  </span>
                </p>
                <blockquote>
                  <p>
                    <span>
                      Jobs fill your pockets, adventures fill your soul.
                    </span>
                  </p>
                </blockquote>
                <h3>Our Mission</h3>
                <p>
                  <span>
                    Through our award-winning blog, we love to provide travelers
                    with guidance and inspiration and connect them to meaningful
                    experiences as they travel the world with curiosity!
                  </span>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default page