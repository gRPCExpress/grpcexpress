import React from "react";
import Link from "next/link";

type SingleLink = {
  url: string;
  name: string;
};

type HeaderProps = {
  text: string;
  links: SingleLink[];
};

const Header = (props: HeaderProps) => (
  <div className="flex flex-col my-2">
    <h3 className="text-xl font-bold pl-2 mb-2">{props.text}</h3>
    {props.links.map((link) => (
      <Link
        href={link.url}
        key={link.name}
        className="pl-2 py-1 hover:bg-gray-100 rounded-lg ml-2 mr-12 transition-colors"
      >
        {link.name}
      </Link>
    ))}
  </div>
);

const gettingStartedLinks = [
  { name: "Overview", url: "/overview" },
  { name: "Installation", url: "/installation" },
  { name: "Example", url: "/example" },
];

const conceptsLinks = [
  { name: "Class Extension", url: "/classextension" },
  { name: "Invalidation", url: "/invalidation" },
  { name: "Resource Management", url: "/resourcemanagement" },
  { name: "Persistent Storage", url: "/persistentstorage" },
  { name: "Queue Management", url: "/queuemanagement" },
];

const Sidebar = () => {
  return (
    <nav className="flex flex-col">
      <Header text="Getting Started" links={gettingStartedLinks} />
      <Header text="Concepts" links={conceptsLinks} />
    </nav>
  );
};

export default Sidebar;
