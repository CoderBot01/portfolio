"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <img
          src="/assets/images/logo.svg"
          alt="img"
          width={30}
          className="object-contain"
        />
        <p className="logo-text">
          <a href="https://github.com/coderbot01" target="_blank">
            CoderBot01{" "}
          </a>
        </p>
      </Link>
      <p>
        <a href="#">Home</a>
      </p>
      <p>
        <a href="#">About me</a>
      </p>
      <p>
        <a href="#">Skills</a>
      </p>
      <p>
        <a href="#">Certifications</a>
      </p>
      <p>
        <a href="#">Projects</a>
      </p>
      <div className="sm:flex hidden"></div>
    </nav>
  );
};

export default Nav;
