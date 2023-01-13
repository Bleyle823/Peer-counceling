/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div >
      <nav
  class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
>
        <p className="text-3xl font-bold">Peer-Counceling</p> 
        <div className="container-fluid w- flex flex-wrap items-center justify-between px-6">
          <Link href="/explore">
            <a className="mr-4  text-white text-2xl">
              Home
            </a>
          </Link>
          <Link href="/upload-video">
            <a className="mr-6 text-white text-2xl">
              Upload-Video
            </a>
          </Link>
          <Link href="/go-live">
            <a className="mr-6 text-white text-2xl">
              Stream-Live Session
            </a>
          </Link>
          <Link href="/community">
            <a className="mr-6 text-white text-2xl">
              Our-Community
            </a>
          </Link>

          <Link href="/">
            <a className="mr-6 text-white text-2xl">
              login
            </a>
          </Link>

          <Link href="/">
            <a className="mr-6 text-white text-2xl">
              Create Profile
            </a>
          </Link>




        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp