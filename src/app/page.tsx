"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

console.log("endpoint", process.env.NEXT_PUBLIC_API_URL);

export default function Home() {
  const { push } = useRouter();
  useEffect(() => {
    push("/login");
  }, []);

  return <></>;
}
