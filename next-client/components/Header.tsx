import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import Logo from "./Logo";
import { NavLink } from "./Navlink";
import { Button } from "./Button";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

export function Container({ className, ...props }: any) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

function MobileNavLink({ href, children }: any) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }: any) {
  return (
    <svg
      aria-hidden="true"
      className="mt-2 h-5 w-5 overflow-visible stroke-white"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-purple-400 p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            {/* <MobileNavLink href="#pricing">Pricing</MobileNavLink> */}
            <hr className="m-2 border-slate-300/40" />
            {/* <MobileNavLink href="/login">Sign in</MobileNavLink> */}
            <Button>Connect</Button>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header() {
  const { address, isConnected } = useAccount();
  const { data: ensNameData, isLoading: ensNameIsLoading } = useEnsName({
    address,
    enabled: isConnected,
  });
  const { data: ensImageData, isLoading: ensImageIsLoading } = useEnsAvatar({
    addressOrName: address,
    enabled: isConnected,
  });
  const { disconnect } = useDisconnect();

  return (
    <header className="pb-2">
      <div className="w-full bg-[#7752DF] h-12 mb-2 flex">
        <div className="m-auto h-[1.5em]">
          <p className="text-center text-white">
            <span className=" italic">Powered by</span> Superfluid, Push Protocol, Wallet Connect, Web3Auth, Coinbase Wallet, ENS
          </p>
        </div>
      </div>
      <Container>
        <nav className="relative z-11 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/help">Get Help</NavLink>
              <NavLink href="#reports">Reports</NavLink>
              <NavLink href="/agent">Agents</NavLink>
              {/* <NavLink href="#pricing">Pricing</NavLink> */}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden sm:block">
              {/* <NavLink href="/login">Sign in</NavLink> */}
              {address ? (
                <div
                  className="rounded-md bg-[#9EE8FA] text-[#7752DF] p-2 flex flex-row"
                  onClick={() => disconnect()}
                >
                  {ensImageData && <img className="rounded-full w-8 mr-2" src={ensImageData} />}
                  <div className="m-auto">{ensNameData ? ensNameData : address?.slice(0, 4) + '...' + address?.slice(-4)}</div>
                </div>
              ) : (
                <ConnectButton />
              )}
            </div>
            <div className="-mr-1 sm:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
