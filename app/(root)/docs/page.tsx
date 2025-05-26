import DocFooter from "@/components/sections/DocFooter";
import DocTracker from "@/components/sections/DocTracker";
import { Data } from "@/constant";
import Link from "next/link";
import React from "react";

const Docs = () => {
  return (
    <section className="docs-section">
      <article className="docs-article">
        <div className="docs-div" id="overview">
          <h1 className="docs-h1">Introduction</h1>
          <p className="docs-p">
            Welcome to <span className="docs-span">Aqyre UI</span> — a
            thoughtfully designed React component library built over{" "}
            <span className="docs-span">ShadCN</span> and enhanced with
            handcrafted elements and subtle animations. Whether you&apos;re
            spinning up a new UI or upgrading an old one, Aqyre UI empowers you
            with sleek, responsive, and ready-to-use components that strike the
            balance between developer speed and design polish.
          </p>
          <p className="docs-p">
            No package installations, no setup fuss — just copy, paste, and
            build.
          </p>
        </div>

        <div className="docs-div" id="how-to-use">
          <h2 className="docs-h2">How to Use</h2>
          <p className="docs-p">
            Instead of installing via CLI, Aqyre UI follows a zero-install
            philosophy. Here&apos;s how to get started:
          </p>
          <ul className="docs-ul">
            {Data.introduction.how_to_use.map(
              ({ title, description }, index) => (
                <li className="docs-li" key={index}>
                  <h4 className="docs-h4">{title}</h4>
                  <p className="docs-p">{description}</p>
                </li>
              )
            )}
          </ul>
          <p className="docs-p">
            Need to customize? All components are built to be extendable and
            easy to tweak.
          </p>
        </div>

        <div className="docs-div" id="prerequisites">
          <h2 className="docs-h2">Prerequisites</h2>
          <p className="docs-p">
            Aqyre UI components are designed to be dropped into modern React or
            Next.js projects. Before using, ensure your project includes:
          </p>
          <ul className="docs-ul">
            {Data.introduction.prerequisites.map(
              ({ title, description, href }, index) => (
                <li className="docs-li" key={index}>
                  <h4 className="docs-h4">{title}:</h4>
                  <p className="docs-p">
                    <Link className="docs-a" href={href}>
                      {description}
                    </Link>
                  </p>
                </li>
              )
            )}
          </ul>
          <p className="docs-p">
            Optimized for{" "}
            <Link className="docs-a" href="https://nextjs.org/docs">
              Next.js
            </Link>
            , but flexible enough for any React environment.
          </p>
        </div>

        <div className="docs-div" id="why-aqyreui">
          <h2 className="docs-h2">Why Choose Aqyre UI?</h2>
          <ul className="docs-ul">
            {Data.introduction.why_aqyre.map(
              ({ title, description }, index) => (
                <li className="docs-li" key={index}>
                  <h4 className="docs-h4">{title}</h4>
                  <p className="docs-p">{description}</p>
                </li>
              )
            )}
          </ul>
        </div>

        <DocFooter />
      </article>
      <DocTracker />
    </section>
  );
};

export default Docs;
