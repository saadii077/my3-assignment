"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Card from "./components/Card";

const page = () => {
  const route = useRouter();
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">
        <h1>Go to About Page</h1>
      </Link>
      <Link href="/navebar">
        <h1>Go to Navebar page</h1>
      </Link>
      <Link href="/contact">
        <h1>Go to Contact Page</h1>
      </Link>
      <Link href="/footer">
        <h1>Go to Footer Page</h1>
      </Link>
      <br />
      <button onClick={() => route.push("/about")}>
        <h1>Go to About Page</h1>
      </button>
      <br />
      <br />
      <button onClick={() => route.push("/navebar")}>
        <h1>Go to Navebar Page</h1>
      </button><br/>
      <br />
      <button onClick={() => route.push("/contact")}>
        <h1>Go to Contact Page</h1>
      </button><br/>
      <br />
      <button onClick={() => route.push("/footer")}>
        <h1>Go to Footer Page</h1>
      </button><br/>
      <br/>
      <Card Name="SAAD" Rollno={1234} day="Monday"/><br/>
      <Card Name="ALI" Rollno={1256} day="Monday"/><br/>
      <Card Name="AHMED" Rollno={8520} day="Monday"/><br/>
    </div>
  );
};

export default page;
