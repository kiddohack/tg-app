import {
  CurrencyDollarIcon,
  HomeIcon,
  UsersIcon,
  WalletIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

export default function IconButtons() {
  return (
    <div className="flex justify-evenly text-bgBtButton lg:text-lg text-sm font-semibold">
      <Link href="/home">
        <div className=" flex-col p-2">
          <div className="flex justify-center">
            <HomeIcon className="size-7 bg-none" />
          </div>
          <p className="flex justify-center">Home</p>
        </div>
      </Link>

      <Link href="/friends">
        <div className="flex-col p-2">
          <div className="flex justify-center">
            <UsersIcon className="size-7  bg-none" />
          </div>
          <p className="flex justify-center">Friends</p>
        </div>
      </Link>

      <Link href="/earn">
        <div className="flex-col p-2">
          <div className="flex justify-center">
            <CurrencyDollarIcon className="size-7 bg-none" />
          </div>
          <p className="flex justify-center">Earn</p>
        </div>
      </Link>

      <Link href="/wallet">
        <div className="flex-col p-2">
          <div className="flex justify-center">
            <WalletIcon className="size-7 bg-none" />
          </div>
          <p className="flex justify-center">Wallet</p>
        </div>
      </Link>
    </div>
  );
}
