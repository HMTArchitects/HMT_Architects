import React from "react";
import Head from "next/head";
export default function sitemap() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HMT Architects- Sitemap</title>
      </Head>
      <body className="ml-8">
        <div>
          <ol>
            <li >
              <a href="">Home</a>
              <ul>
                <li>
                  <a href="">Explore</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </li>
            <li >
              <a href="">About Us</a>
              <ul>
                <li>
                  <a href="">Explore my work</a>
                </li>
              </ul>
            </li>
            <li >
              <a href="">See Projects</a>
              <ol>
                <li>
                  <a href="">Institutions</a>
                  <ul>
                    <li>
                      <a href="">Tagore School</a>
                    </li>
                    <li>
                      <a href="">Meenakshi Vishwa Vidyashram</a>
                    </li>
                    <li>
                      <a href="">Akshaya Multispeciality Hospital</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">Residential</a>
                  <ul>
                    <li>
                      <a href="">Mr. Senthil's</a>
                    </li>
                    <li>
                      <a href="">Mr. Hari's</a>
                    </li>
                    <li>
                      <a href="">Mr. Saravanan's</a>
                    </li>
                    <li>
                      <a href="">Dr. Alwar's</a>
                    </li>
                    <li>
                      <a href="">Mr. Anand's</a>
                    </li>
                    <li>
                      <a href="">Mr. Periyasami's</a>
                    </li>
                    <li>
                      <a href="">Mr. Sarath's</a>
                    </li>
                    <li>
                      <a href="">Mrs. Sangeetha's</a>
                    </li>
                    <li>
                      <a href="">Mr. Ashok</a>
                    </li>
                    <li>
                      <a href="">Mr. Mohan</a>
                    </li>
                    <li>
                      <a href="">Mr. Nagarajan</a>
                    </li>
                    <li>
                      <a href="">Mr. Siva</a>
                    </li>
                    <li>
                      <a href="">Mr. Srinivasan</a>
                    </li>
                    <li>
                      <a href="">Mr. Muruganandham</a>
                    </li>
                    <li>
                      <a href="">Mrs. Karthika</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">Commercial and Office</a>
                  <ul>
                    <li>
                      <a href="">Adyar Interior</a>
                    </li>
                    <li>
                      <a href="">Eastern Palace</a>
                    </li>
                    <li>
                      <a href="">MBit</a>
                    </li>
                    <li>
                      <a href="">Evergreen</a>
                    </li>
                    <li>
                      <a href="">SRK Honda</a>
                    </li>
                    <li>
                      <a href="">Uthiramerur Factory</a>
                    </li>
                    <li>
                      <a href="">Venkat Mahal</a>
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li >
              <a href="">Contact Us</a>
              <ul>
                <li>
                  <a href="">View Projects</a>
                </li>
              </ul>
            </li>
            <li >
              <a href="">Social Links</a>
              <ul>
                <li>
                  <a href="">Instagram</a>
                </li>
                <li>
                  <a href="">Facebook</a>
                </li>
                <li>
                  <a href="">Twitter</a>
                </li>
                <li>
                  <a href="">LinkedIn</a>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </body>
    </>
  );
}
