const CompanyNameScreen = ({
  setName,
}: {
  setName: (name: string) => void;
}) => {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-3xl text-black m-auto mb-8">
      What company or protocol sent you here?
      </h2>
      <ul className="menu bg-[#51DBFD] text-white w-56 rounded-box m-auto">
      <li>
          <a onClick={() => setName("coinbase")}>Coinbase</a>
        </li>
        <li>
          <a onClick={() => setName("polygon")}>Polygon</a>
        </li>
        <li>
          <a onClick={() => setName("optimism")}>Optimism</a>
        </li>
        <li>
          <a onClick={() => setName("uniswap")}>Uniswap</a>
        </li>
        <li>
          <a onClick={() => setName("ethereum")}>Ethereum</a>
        </li>
        <li>
          <a onClick={() => setName("bridging")}>Bridging Protocol</a>
        </li>
        <li>
          <a onClick={() => setName("metamask")}>Metamask</a>
        </li>
        <li>
          <a onClick={() => setName("other")}>Other</a>
        </li>
      </ul>
    </div>
  );
};

export default CompanyNameScreen;
