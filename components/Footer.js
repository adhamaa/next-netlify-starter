// import React from "react";

export default function Footer() {
  return (
    <footer className="w-screen h-sixty bg-bass overflow-hidden lg:pt-6">
      {/* up down container */}
      <div className="flex flex-col h-full justify-evenly  lg:p-20">
        {/* left right container */}
        <div className="flex justify-around relative">
          {/* Logo */}
          <img src="/logo.png" className="h-36 w-20" />
          {/* Quicklinks */}
          <div className="title z-10 relative flex flex-col leading-7 text-text2">
            <h1 className="text-main text-lg">Quicklinks</h1>
            <ul>
              <li>
                <a className="hover:text-text1" href="/">
                  Laman Utama
                </a>
              </li>
              <li>
                <a className="hover:text-text1" href="/pengenalan">
                  Pengenalan
                </a>
              </li>
              <li>
                <a className="hover:text-text1" href="/organisasi">
                  Organisasi
                </a>
              </li>
              <li>
                <a className="hover:text-text1" href="aktiviti">
                  Aktiviti
                </a>
              </li>
              <li>
                <a className="hover:text-text1" href="galeri">
                  Galeri
                </a>
              </li>
              <li>
                <a className="hover:text-text1" href="hubungi">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>
          {/* Lokasi */}
          <div className="title hidden sm:inline text-text2">
            <h1 className="text-main text-lg">Lokasi</h1>
            <h2>Yayasan Tuan Sarifah</h2>
            <br />
            <h2>
              29 KLCC
              <br />
              60000 KUALA
              <br />
              LUMPUR MALAYSIA
            </h2>
          </div>
          {/* Backdrop */}
          <img
            className="absolute top-10 sm:right-20 sm:-top-2 z-0 w-half"
            src="/group-256@3x.png"
            alt="backdrop"
          />
          {/* Hubungi Kami */}
          <div className="title hidden lg:inline">
            <h1 className="text-main text-lg">Hubungi Kami</h1>
            <form className="flex flex-col min-w-300" action="">
              <input
                id="name"
                type="text"
                className="bg-text3 p-3 my-1"
                placeholder="Nama"
                name="name"
              />
              <input
                id="email"
                type="email"
                className="bg-text3 p-3 my-1"
                placeholder="E-mel"
                name="email"
              />
              <textarea
                id="subject"
                className="bg-text3 p-3 my-1 min-h-150"
                name="subject"
                placeholder="Mesej..."
              />
              <input
                type="submit"
                value="Hantar"
                className="bg-main p-3 my-1"
              />
            </form>
          </div>
        </div>
        {/* footlinks */}
        <div className="footLinks relative flex sm:flex flex-col justify-center items-center text-main gap-2">
          <ul className="hidden sm:flex justify-around divide-x-2 divide-compliment2 text-sm items-center">
            <li className="px-4">
              <a href="">Reports</a>
            </li>
            <li className="px-4">
              <a href="">Financial Overview</a>
            </li>
            <li className="px-4">
              <a href="">Anti-Coruption Policy</a>
            </li>
            <li className="px-4">
              <a href="">Credits</a>
            </li>
            <li className="px-4">
              <a href="">Privacy Policy</a>
            </li>
            <li className="px-4">
              <a href="">Terms of Use</a>
            </li>
          </ul>
          <span className="text-center text-xs">
            &copy; 2020 Yayasan Tuan Sarifah
          </span>
        </div>
      </div>
    </footer>
  );
}
