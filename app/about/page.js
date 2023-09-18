import "./style_about.css"
import Head from "next/head";
import Image from "next/image";
import pic1 from "@/app/about/pic1.png"
import pic2 from "@/app/about/pic2.png"
import pic3 from "@/app/about/pic3.png"
import pic4 from "@/app/about/pic4.png"
import Link from "next/link";
export default function About(props) {
  return (
    <>
    <Head><link rel="stylesheet" src="/style_about.css"></link></Head>
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container">
        <div className="imgContainer">
          <img
            className="mainImg"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw2.svg"
          />
        </div>
        <div className="responsive-container-block textSide">
          <p className="text-blk heading">About Us</p>
          <p className="text-blk subHeading">
          HMT Architects is one of the best Architects in Chennai and it has been proven on many occasions with our accomplishments. We have evolved as the best architects over a period of time with our process-oriented approach and satisfying the client's needs to the fullest.
          
          HMT Architects is one of the best Interior designers in Chennai for Residential, Commercial, Corporate, School, Hospital, and all kinds of projects. Customization is the key to our projects. We are not quantity oriented, but we are quality driven. Respecting the timeline has been our strength.
          We are a one-stop solution for all your building needs. We handcraft the design specific to the client's needs giving it a unique identity.
          </p>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div className="cardImgContainer">
            <Image src={pic1} className="cardImg" alt="HMT Architects Logo" />
            </div>
            <div className="cardText">
              <p className="text-blk cardHeading">Verified</p>
              <p className="text-blk cardSubHeading">
              Turnkey Consultants - An one-stop solution to all your Infrastructure needs.
              </p>
            </div>
          </div>
          <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div class="cardImgContainer">
            <Image src={pic2} className="cardImg" alt="HMT Architects Logo" />
            </div>
            <div class="cardText">
              <p class="text-blk cardHeading">Design</p>
              <p class="text-blk cardSubHeading">
              Best Architects with core values of design.
              </p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div className="cardImgContainer">
            <Image src={pic3} className="cardImg" alt="HMT Architects Logo" />
            </div>
            <div class="cardText">
              <p class="text-blk cardHeading">Quality</p>
              <p class="text-blk cardSubHeading">
              Quality Oriented Professionals are driven by passion.
              </p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div className="cardImgContainer">
            <Image src={pic4} className="cardImg" alt="HMT Architects Logo" />
            </div>
            <div className="cardText">
              <p className="text-blk cardHeading">On-time Delivery</p>
              <p className="text-blk cardSubHeading">
              It is our core strength.Satisfaction of clients has been our mantra to success.
              </p>
            </div>
          </div>
          <Link href="./projects">
            <button className="explore">Explore our Work</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
