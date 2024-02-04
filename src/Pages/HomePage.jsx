import { FaExchangeAlt } from 'react-icons/fa'
import { BiCog } from 'react-icons/bi'
import { AiOutlineCode, AiOutlineEye } from 'react-icons/ai'
import { Link } from '@nextui-org/react';

function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="min-h-screen gap-2 px-6 py-4 w-full flex-col">
        <div className="pb-6 sm:pb-8 lg:pb-12 w-full h-1/2">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <section className="flex flex-col items-center">
              <div className="flex max-w-xl flex-col items-center pb-0 pt-8 text-center sm:pb-16 lg:pb-32 lg:pt-32">
                <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:mb-6 md:text-6xl">HTML TO PDF CONVERETER</h1>
                <p className="mb-6 leading-relaxed  md:mb-6 xl:text-lg">Effortless HTML to PDF Conversion at Your Fingertips!</p>
                <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                  <Link href="https://github.com/vikramsamak/html-to-pdf-microservice" isExternal className="inline-block rounded-lg bg-[#006FEE] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                    Docs
                  </Link>
                  <Link href='/converter' className="inline-block rounded-lg bg-[#006FEE] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                    Test this
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="py-4 sm:py-8 lg:py-12 h-1/2">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold  md:mb-6 lg:text-3xl">Features</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-2 xl:gap-16">
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#006FEE] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <FaExchangeAlt className='w-6 h-6' />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">Seamless Conversion</h3>
                  <p className="mb-2">Effortless transformation of HTML into high-quality PDF documents with just a few clicks.</p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#006FEE] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <BiCog className='w-6 h-6' />
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">Customizable Settings</h3>
                  <p className="mb-2">Tailor your PDFs with customizable settings, including paper size, orientation, and more.</p>

                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#006FEE] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <AiOutlineCode className='w-6 h-6' />
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">Code Editing Environment</h3>
                  <p className="mb-2">Intuitive code editor with syntax highlighting for HTML input, ensuring a seamless coding experience.</p>

                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#006FEE] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <AiOutlineEye className='w-6 h-6' />
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">Preview and Download</h3>
                  <p className="mb-2">Instant preview of generated PDFs with the ability to download and share the final document.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}



export default HomePage;