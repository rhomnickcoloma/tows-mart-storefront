import { Header } from "@towns/components/Header";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />

      <div
        className="absolute overflow-hidden blur-lg sm:-top-80 left-0 right-0"
        aria-hidden="true"
      >
        <img src="/pancake.jpg" className="z-0 opacity-30" width="100%" />
      </div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          // className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          >
          </div>
        </div> */}
        <div className="relative mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 z-1">
          <div className="flex">
            <div className="w-1/3">
              <img src="/pancake.jpg" />
            </div>
            <div className="text-center pl-10 w-2/3">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Announcement{" "}
                  <a href="#" className="font-semibold text-indigo-600">
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                WAFFLE !!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Imagine this: a golden-brown waffle, freshly made, with a crisp
                exterior and a fluffy, soft interior. Picture it now, drizzled
                with warm maple syrup cascading down its ridges, accompanied by
                a dollop of creamy butter melting into every groove. It's not
                just a waffle; it's a symphony of flavors and textures, a
                delight for your taste buds. And the best part? It's all yours
                to enjoy.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Order Now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          // className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
