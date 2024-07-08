import Link from "next/link";

const Links = () => {

    const links = [
        {
          title: "Homepage",
          path: "/",
        },
        {
          title: "signup",
          path: "/sign-up",
        },
        {
          title: "signin",
          path: "/sign-in",
        },
        {
          title: "feedback",
          path: "/feedback",
        },
        {
          title: "earnmoney",
          path: "/earnmoney",
        },
        {
          title: "sellnotes",
          path: "/earnmoney/sellnotes",
        },
        {
          title: "buynotes",
          path: "/earnmoney/buynotes",
        },
        {
          title: "getstarted",
          path: "/getstarted",
        },
        {
          title: "mynotes",
          path: "/mynotes",
        },
      ];

    return (
      <div>
        {links.map((link) => (
          <Link href={link.path} key={link.title}>{link.title}</Link>
        ))}
      </div>
    )
  }
  
  export default Links;