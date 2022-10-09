import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-row w-full">
        <div className="w-1/2 pt-4">
          <div className="pl-10 pr-4">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <div className="text-3xl font-sans font-bold text-[#434343] mt-4">
              Customer Service Goes Web3
            </div>
            <div className="text-l font-sans text-[#434343] mt-4">
              <p>
                Providing Web3 and Metaverse companies with expert customer
                support.
              </p>
              <p className="mt-4">
                OnboardingFrens is a support network of web3 community members
                that provide solutions to Users’ (Frens’) problems in the web3
                ecosystem. From the simplest to the most complex. We’ve got you!
              </p>
              <div className="flex flex-row">
                <div className="w-1/4 px-2">
                  <img className="" src="images/reliable.png" />
                  <p className="text-center">Reliable</p>
                </div>
                <div className="w-1/4 px-2">
                  <img className="" src="images/private.png" />
                  <p className="text-center">Private</p>
                </div>
                <div className="w-1/4 px-2">
                  <img className="" src="images/professional.png" />
                  <p className="text-center">Professional</p>
                </div>
                <div className="w-1/4 px-2">
                  <img className="" src="images/userfriendly.png" />
                  <p className="text-center">User Friendly</p>
                </div>
              </div>
              <Link href={"/help"}>
                <button className="btn mt-4 text-white btn-accent">
                  Get Help Now from our Agents
                </button>
              </Link>
              <div className="mt-4">
                <div className="rounded-md bg-white py-4 px-4">
                  <div className="flex flex-row">
                    <div className="w-12">
                      <img className="w-full" src="images/dude.png" />
                    </div>
                    <div className="ml-4">
                      <p className="italic">
                        “Now I feel confident in my web3 journey”
                      </p>
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 pr-4">
          {/* <video className="w-full" autoPlay loop muted inline>
            <source src="images/main-page-thing.mp4" type="video/mp4" />
          </video> */}
          <img className="w-full" src="images/homepage-banner.png" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
