import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useAccount } from "wagmi";
import ChatLoading from "../components/HelpScreens/ChatLoading";
import ChatScreen from "../components/HelpScreens/ChatScreen";
import CompanyNameScreen from "../components/HelpScreens/CompanyNameScreen";
import ProblemScreen from "../components/HelpScreens/ProblemScreen";
import axios from "axios";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Review from "../components/HelpScreens/Review";
import { useRouter } from "next/router";

enum HelpStep {
  CompanyName,
  Problem,
  ChatLoading,
  Chat,
  Review,
}

const Help: NextPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [problem, setProblem] = useState("");
  const [step, setStep] = useState<HelpStep>(HelpStep.CompanyName);
  const { address, isConnected } = useAccount();

  const router = useRouter();

  const submitRequest = (problem: string) => {
    setStep(HelpStep.ChatLoading);
    axios
      .post("/api/notify", {
        address,
        issue: `${companyName} & ${problem}`,
      })
      .then((data) => {
        console.log(data);
        setStep(HelpStep.Chat);
      });
  };

  return (
    <Layout>
      <div className="flex flex-row">
        {step === HelpStep.CompanyName ? (
          <CompanyNameScreen
            setName={(name: string) => {
              setCompanyName(name);
              setStep(HelpStep.Problem);
            }}
          />
        ) : step === HelpStep.Problem ? (
          <ProblemScreen
            setProblem={(problem: string) => {
              setProblem(problem);
              submitRequest(problem);
            }}
          />
        ) : step === HelpStep.ChatLoading ? (
          <ChatLoading advance={() => /* setStep(HelpStep.Chat) */ {}} />
        ) : step === HelpStep.Chat ? (
          <ChatScreen advance={() => setStep(HelpStep.Review)} />
        ) : (
          <Review submit={() => router.push("/")} />
        )}
      </div>
    </Layout>
  );
};

export default Help;
