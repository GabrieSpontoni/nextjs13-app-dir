import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

import Link from "next/link";

interface Link {
  icon: JSX.Element;
  url: string;
}

export function Footer() {
  const links: Link[] = [
    {
      icon: <BsGithub size={24} />,
      url: "https://github.com/GabrieSpontoni",
    },
    {
      icon: <BsLinkedin size={24} />,
      url: "https://www.linkedin.com/in/gabriel-spontoni-4816b519a/",
    },
    {
      icon: <BsFacebook size={24} />,
      url: "https://www.facebook.com/gabriel.spontoni",
    },
    {
      icon: <BsInstagram size={24} />,
      url: "https://www.instagram.com/spontonigabriel/",
    },
  ];

  return (
    <footer className="footer footer-center p-10 bg-base-200">
      <div>
        <p className="font-bold">
          Gabriel Spontoni <br />
          Campo Grande, MS - Brazil
        </p>
        <p>Copyright © 2023</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          {links.map((link, index) => (
            <Link key={index} href={link.url} target="_blank">
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
