import { NextPage } from "next";
import {
  useAccount,
  useContractWrite,
  useEnsAvatar,
  useEnsName,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import Layout from "../components/Layout";
import EmployeeAccounts from "../EmployeeAccounts.json";
import EmployeeAccountsAddress from "../EmployeeAccounts-address.json";

const Agent: NextPage = () => {
  const { address, isConnected } = useAccount();
  const { data: ensNameData, isLoading: ensNameIsLoading } = useEnsName({
    address,
    enabled: isConnected,
  });
  const { data: ensImageData, isLoading: ensImageIsLoading } = useEnsAvatar({
    addressOrName: address,
    enabled: isConnected,
  });

  const { config: createConfig } = usePrepareContractWrite({
    addressOrName: EmployeeAccountsAddress.address,
    contractInterface: EmployeeAccounts.abi,
    functionName: "createStream",
    overrides: {
      gasLimit: 957650,
    },
  });
  const { data: createData, write: createWrite } =
    useContractWrite(createConfig);

  const { isLoading: createIsLoading, isSuccess: createIsSuccess } =
    useWaitForTransaction({
      hash: createData?.hash,
    });

  const { config: endConfig } = usePrepareContractWrite({
    addressOrName: EmployeeAccountsAddress.address,
    contractInterface: EmployeeAccounts.abi,
    functionName: "endStream",
  });
  const { data: endData, write: endWrite } = useContractWrite(endConfig);

  const { isLoading: endIsLoading, isSuccess: endIsSuccess } =
    useWaitForTransaction({
      hash: endData?.hash,
    });

  return (
    <Layout>
      <div className="w-full flex flex-col">
        <div className="w-[70%] rounded-md m-auto border-[#51DBFD] h-18 p-4 border border-2 text-[#7752DF] mb-8 text-center">
          {ensImageData && (
            <img className="rounded-full w-8 mr-2 " src={ensImageData} />
          )}
          <div className="m-auto">
            Agent: {ensNameData ? ensNameData : address}
          </div>
        </div>
        <div className="w-full flex align-middle justify-center">
          <button className="btn gap-2 m-2 flex-col h-20">
            <p>Time Today</p>
            <div className="badge badge-secondary">3 Hours</div>
          </button>
          <button className="btn gap-2 m-2 flex-col h-20">
            <p>Earnings</p>
            <div className="badge badge-secondary">$39.48</div>
          </button>
        </div>
        <div className="w-full flex align-middle justify-center">
          <button
            className="btn btn-accent gap-2 m-2"
            onClick={() => {
              if (createWrite) createWrite();
            }}
          >
            Clock In
          </button>
          <button
            className="btn btn-secondary gap-2 m-2"
            onClick={() => {
              if (endWrite) endWrite();
            }}
          >
            Clock Out
          </button>
        </div>
        <div className="w-[70%] m-auto bg-[#D7D7FA] h-16 p-4 mt-8 flex text-black rounded-full">
          <img src="images/superfluid.png" className="h-full ml-8 " />
          <p className="grow-1 w-full text-center text-xl mr-16">
            <span className=" italic">Powered by</span> Superfluid
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Agent;
