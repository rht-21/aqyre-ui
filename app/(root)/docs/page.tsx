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
          <h1 className="docs-h1">Getting Started</h1>
          <p className="docs-p">
            Welcome to <span>Aqyre UI</span> — a lightweight, efficient, and
            accessible React UI component library built on top of ShadCN.
            Whether you&apos;re building a new project or enhancing an existing
            one, Aqyre provides the perfect set of customizable components to
            help you create beautiful, modern web interfaces with ease.
          </p>
        </div>

        <div className="docs-div" id="why-aqyreui">
          <h2 className="docs-h2">What makes Aqyre UI special?</h2>
          <ul className="docs-ul">
            {Data.unique_features.map(({ title, description }, index) => (
              <li className="docs-li" key={index}>
                <h4 className="docs-h4">{title}</h4>
                <p className="docs-p">{description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="docs-div" id="prerequisites">
          <h2 className="docs-h2">Prerequisites</h2>
          <p className="docs-p">
            Before using Aqyre UI, make sure your project is set up with:
          </p>
          <ul className="docs-ul">
            {Data.prerequisites.map(({ title, description, href }, index) => (
              <li className="docs-li" key={index}>
                <h4 className="docs-h4">{title}: </h4>
                <p className="docs-p">
                  <Link className="docs-a" href={href}>
                    {description}
                  </Link>
                </p>
              </li>
            ))}
            <p className="docs-p">
              Aqyre UI works seamlessly in Next.js apps. Learn more about{" "}
              <Link className="docs-a" href="https://nextjs.org/docs">
                Next.js
              </Link>
            </p>
          </ul>
        </div>

        <DocFooter />
      </article>
      <DocTracker />
    </section>
  );
};

export default Docs;
