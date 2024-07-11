import "@styles/globals.css";
import { Children } from "react";
import Profile from "@components/Profile";
import Nav from "@components/Nav";

export const metadata = {
  title: "Praveen Portfolio",
  description: "Discover Who am I?",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};
export default Rootlayout;
