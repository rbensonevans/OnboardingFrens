import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { ethers } from "ethers";
import * as PushAPI from "@pushprotocol/restapi";

dotenv.config();
const signer = new ethers.Wallet(process.env.PRIVATE_KEY || "");

const sendNotification = async (address: string, issue: string) => {
  address = "0x4a4bD3346418A0752983D585Dfa81384483bBAbF";
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `[OnboardingFrens] New Request Submitted:`,
        body: `[OnboardingFrens] user with address ${address} submitted a new request`,
      },
      payload: {
        title: `[OnboardingFrens] New Request Submitted:`,
        body: `user with address ${address} submitted a new request about ${issue}`,
        cta: "",
        img: "",
      },
      recipients: "eip155:5:0x4a4bD3346418A0752983D585Dfa81384483bBAbF", // recipient address
      channel: "eip155:5:0x946241e7680D91471781450d6f3f1c27d208C53a", // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};

sendNotification(
  "eip155:5:0x4a4bD3346418A0752983D585Dfa81384483bBAbF",
  "req.body.issue"
).then(() => console.log("done"));
