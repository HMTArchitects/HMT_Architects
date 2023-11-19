"use client"
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
            <li>
              <a href="/" className="hover:text-purple-600">Home</a>
              <ul>
                <li>
                  <a href="/projects" className="hover:text-purple-600">Explore</a>
                </li>
                <li>
                  <a href="/contactus" className="hover:text-purple-600">Contact Us</a>
                </li>
              </ul>
            </li>
            <li >
              <a href="/about" className="hover:text-purple-600">About Us</a>
              <ul>
                <li>
                  <a href="/projects" className="hover:text-purple-600">Explore my work</a>
                </li>
              </ul>
            </li>
            <li >
              <a href="/projects" className="hover:text-purple-600">See Projects</a>
              <ol>
                <li>
                  <a>Institutions</a>
                  <ul>
                    <li>
                      <a href="/projects/tagoreschool" className="hover:text-purple-600">Tagore School</a>
                    </li>
                    <li>
                      <a href="/projects/meenakshividyashram" className="hover:text-purple-600">Meenakshi Vishwa Vidyashram</a>
                    </li>
                    <li>
                      <a href="/projects/akshayahospital" className="hover:text-purple-600">Akshaya Multispeciality Hospital</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Residential</a>
                  <ul>
                    <li>
                      <a href="/projects/senthilresidence" className="hover:text-purple-600">Mr. Senthil's</a>
                    </li>
                    <li>
                      <a href="/projects/hariresidence" className="hover:text-purple-600">Mr. Hari's</a>
                    </li>
                    <li>
                      <a href="/projects/saravananresidence" className="hover:text-purple-600">Mr. Saravanan's</a>
                    </li>
                    <li>
                      <a href="/projects/alwarresidence" className="hover:text-purple-600">Dr. Alwar's</a>
                    </li>
                    <li>
                      <a href="/projects/anandresidence" className="hover:text-purple-600">Mr. Anand's</a>
                    </li>
                    <li>
                      <a href="/projects/periyasamiresidence" className="hover:text-purple-600">Mr. Periyasami's</a>
                    </li>
                    <li>
                      <a href="/projects/sarathresidence" className="hover:text-purple-600">Mr. Sarath's</a>
                    </li>
                    <li>
                      <a href="/projects/sangeetharesidence" className="hover:text-purple-600">Mrs. Sangeetha's</a>
                    </li>
                    <li>
                      <a href="/projects/ashokresidence" className="hover:text-purple-600">Mr. Ashok</a>
                    </li>
                    <li>
                      <a href="/projects/mohankilpauk" className="hover:text-purple-600">Mr. Mohan</a>
                    </li>
                    <li>
                      <a href="/projects/farmhousedevaneri" className="hover:text-purple-600">Mr. Nagarajan</a>
                    </li>
                    <li>
                      <a href="/projects/sivakaur" className="hover:text-purple-600">Mr. Siva</a>
                    </li>
                    <li>
                      <a href="/projects/srinivasankaranodai" className="hover:text-purple-600">Mr. Srinivasan</a>
                    </li>
                    <li>
                      <a href="/projects/muruganandhamkaur" className="hover:text-purple-600">Mr. Muruganandham</a>
                    </li>
                    <li>
                      <a href="/projects/karthikadindigul" className="hover:text-purple-600">Mrs. Karthika</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Commercial and Office</a>
                  <ul>
                    <li>
                      <a href="/projects/adyarinterior" className="hover:text-purple-600">Adyar Interior</a>
                    </li>
                    <li>
                      <a href="/projects/easternpalaceoffcomm" className="hover:text-purple-600">Eastern Palace</a>
                    </li>
                    <li>
                      <a href="/projects/mbit" className="hover:text-purple-600">MBit</a>
                    </li>
                    <li>
                      <a href="/projects/evergreen" className="hover:text-purple-600">Evergreen</a>
                    </li>
                    <li>
                      <a href="/projects/srkhondaoffcomm" className="hover:text-purple-600">SRK Honda</a>
                    </li>
                    <li>
                      <a href="/projects/uthifactoryoffcomm" className="hover:text-purple-600">Uthiramerur Factory</a>
                    </li>
                    <li>
                      <a href="/projects/venkatmahal" className="hover:text-purple-600">Venkat Mahal</a>
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li >
              <a href="/contactus" className="hover:text-purple-600">Contact Us</a>
              <ul>
                <li>
                  <a href="/projects" className="hover:text-purple-600">View Projects</a>
                </li>
              </ul>
            </li>
            <li >
              <a>Social Links</a>
              <ul>
                <li>
                  <a href="https://www.instagram.com/hmt_architects/" className="hover:text-purple-600">Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/HMTArch/" className="hover:text-purple-600">Facebook</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/hmt-architects/about/" className="hover:text-purple-600">LinkedIn</a>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </body>
    </>
  );
}
