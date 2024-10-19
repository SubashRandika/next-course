"use client";

import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Coffee from "@/public/images/Coffee.jpg";
// import HeavyComponent from "./components/HeavyComponent";
import { useState } from "react";
import dynamic from "next/dynamic";
import { authOptions } from "./api/auth/authOptions";
// import _ from "lodash";

const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false, // stop server side rendering (pre rendering) on client components due to some browser api calls will raise some errors
  loading: () => <span className="loading loading-spinner loading-md"></span>,
});

export default function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <main className="relative h-screen">
      {/* <h1>Hello {session ? <span>{session.user!.name}</span> : "Guest"}</h1> */}
      <Link href="/users">Users</Link>
      <ProductCard />

      {/* <Image src={Coffee} alt="Coffee" /> */}

      {/* <Image
        className="object-cover"
        src={"https://bit.ly/react-cover"}
        alt="React"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
        priority
      /> */}

      <button
        className="mt-4 btn btn-secondary"
        // onClick={() => setIsVisible(!isVisible)}
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sorted = _.orderBy(users, ["name"], ["asc"]);
          console.log(sorted);
        }}
      >
        Show
      </button>

      {isVisible && <HeavyComponent />}
    </main>
  );
}
