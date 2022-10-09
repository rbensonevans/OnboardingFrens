// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const signer = new ethers.Wallet(process.env.PRIVATE_KEY || "");

const sendNotification = async (address: string, issue: string) => {
  address = "0x4a4bD3346418A0752983D585Dfa81384483bBAbF";
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 1, // broadcast
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
      channel: "eip155:5:0x946241e7680D91471781450d6f3f1c27d208C53a", // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);
  console.log(req.body.address);
  console.log(req.body.issue);
  /* const reqData = JSON.parse(req.body);
  console.log(reqData); */
  await sendNotification(req.body.address, req.body.issue);
  res.status(200).json({ name: "John Doe" });
}
