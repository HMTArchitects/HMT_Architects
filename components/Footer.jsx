"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [footerNav, setFooterNav] = useState(false); // Use a different state variable for the footer navigation

  return (
    <div className=" flex flex-col h-2">
      <footer className="justify-between items-center w-full bg-white bottom-0 left-0 right-0">
        <div className="flex justify-between items-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 text-gray-950 md:py-5 md:block">
              <div class="col-lg-4 text-lg-start text-sm">
              ©<strong>HMT_Architects</strong> &nbsp; All Rights Reserved
              </div>
            </div>
          </div>
          <div className="text-black">
            <div
              className={`flex item-center justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                footerNav ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className=" flex items-center justify-between h-screen md:h-auto items-right md:flex">
                <li className="pb-6 text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener"
                    className="social-media__link"
                    aria-label="Follow us on Instagram"
                  >
                    <svg
                      focusable="false"
                      width="20"
                      height="20"
                      className="icon icon--instagram"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0C5.827 0 5.555.01 4.702.048 3.85.087 3.269.222 2.76.42a3.921 3.921 0 00-1.417.923c-.445.444-.719.89-.923 1.417-.198.509-.333 1.09-.372 1.942C.01 5.555 0 5.827 0 8s.01 2.445.048 3.298c.039.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.719 1.417.923.509.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.445-.01 3.298-.048c.852-.039 1.433-.174 1.942-.372a3.922 3.922 0 001.417-.923c.445-.444.719-.89.923-1.417.198-.509.333-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.298c-.039-.852-.174-1.433-.372-1.942a3.922 3.922 0 00-.923-1.417A3.921 3.921 0 0013.24.42c-.509-.198-1.09-.333-1.942-.372C10.445.01 10.173 0 8 0zm0 1.441c2.136 0 2.39.009 3.233.047.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.009 2.39-.047 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.479 2.479 0 01-.92-.598 2.478 2.478 0 01-.598-.92c-.11-.282-.24-.705-.276-1.485-.038-.844-.047-1.097-.047-3.233s.009-2.39.047-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.844-.038 1.097-.047 3.233-.047zm0 9.226a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm0-6.775a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm5.23-.162a.96.96 0 11-1.92 0 .96.96 0 011.92 0z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener"
                    class="social-media__link"
                    aria-label="Follow us on Facebook"
                  >
                    <svg
                      focusable="false"
                      width="20"
                      height="20"
                      class="icon icon--facebook   "
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.486 16.2084L2.486 8.81845H0L0 5.93845L2.486 5.93845L2.486 3.81845C2.38483 2.79982 2.73793 1.78841 3.45107 1.05407C4.16421 0.319722 5.16485 -0.0628415 6.186 0.00844868C6.9284 0.00408689 7.67039 0.0441585 8.408 0.128449V2.69845L6.883 2.69845C6.4898 2.61523 6.08104 2.73438 5.79414 3.01585C5.50724 3.29732 5.3803 3.70373 5.456 4.09845L5.456 5.93845H8.308L7.936 8.81845H5.46L5.46 16.2084H2.486Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener"
                    className="social-media__link"
                    aria-label="Follow us on Twitter"
                  >
                    <svg
                      focusable="false"
                      width="30"
                      height="32"
                      className="icon icon--twitter"
                      viewBox="0 0 28 28"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21 6.774c-.663.301-1.375.504-2.122.596a3.781 3.781 0 001.625-2.093 7.3 7.3 0 01-2.345.918A3.648 3.648 0 0015.462 5c-2.04 0-3.693 1.694-3.693 3.783 0 .297.032.586.095.862-3.069-.157-5.79-1.663-7.611-3.952-.318.558-.5 1.209-.5 1.902 0 1.313.652 2.47 1.643 3.148a3.608 3.608 0 01-1.674-.472v.047c0 1.833 1.274 3.363 2.962 3.71a3.601 3.601 0 01-1.667.065c.47 1.504 1.834 2.597 3.45 2.628A7.297 7.297 0 013 18.288a10.27 10.27 0 005.661 1.7c6.792 0 10.507-5.766 10.507-10.766 0-.164-.004-.327-.01-.49A7.637 7.637 0 0021 6.774 0z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center border-b-2 hover:text-purple-700 md:border-b-0 border-purple-900 md:hover:text-purple-600 md:hover-bg-transparent">
                  <a
                    href="https://www.linkedin.com/company/hmt-architects/"
                    target="_blank"
                    rel="noopener"
                    className="social-media__link"
                    aria-label="Connect with us on LinkedIn"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
