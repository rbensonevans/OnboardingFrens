const ProblemScreen = ({ setProblem }: { setProblem: (problem: string) => void }) => {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-3xl text-black m-auto mb-8">
        What kind of problem are you having?
      </h2>
      <ul className="menu bg-[#51DBFD] text-white w-56 rounded-box m-auto">
        <li>
          <a onClick={() => setProblem("wallet-set-up")}>Wallet Set Up</a>
        </li>
        <li>
          <a onClick={() => setProblem("buying-crypto")}>Buying Crypto</a>
        </li>
        <li>
          <a onClick={() => setProblem("bridging-tokens")}>Bridging Tokens</a>
        </li>
        <li>
          <a onClick={() => setProblem("lost-transaction")}>Lost Transaction</a>
        </li>
        <li>
          <a onClick={() => setProblem("withdraw-to-fiat")}>Withdrawing to Fiat</a>
        </li>
        <li>
          <a onClick={() => setProblem("other")}>Other</a>
        </li>
      </ul>
    </div>
  );
};

export default ProblemScreen;
