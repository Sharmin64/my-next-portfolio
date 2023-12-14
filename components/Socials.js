import React from "react";
import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDiscordLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link
        target="_blank"
        href={
          "https://instagram.com/sharmin.liza.5245hibnrrt?igshid=OGQ5ZDc2ODk2ZA=="
        }
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/sharmin.liza.5245hibnrrt/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        target="_blank"
        href={
          "https://discord.com/channels/363985050578190336/1136453197913927840"
        }
        className="hover:text-accent transition-all duration-300"
      >
        <RiDiscordLine />
      </Link>
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/sarmin-sultana-mern"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://github.com/Sharmin64"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
