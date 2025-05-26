import DocTracker from "@/components/sections/DocTracker";
import { Data } from "@/constant";
import Link from "next/link";
import React from "react";

const Docs = () => {
  return (
    <section className="docs-section">
      <article>
        <div id="overview">
          <h1>Getting Started</h1>
          <p>
            Welcome to <span>Aqyre UI</span> — a lightweight, efficient, and
            accessible React UI component library built on top of ShadCN.
            Whether you&apos;re building a new project or enhancing an existing
            one, Aqyre provides the perfect set of customizable components to
            help you create beautiful, modern web interfaces with ease.
          </p>
        </div>

        <div id="why-aqyreui">
          <h2>What makes Aqyre UI special?</h2>
          <ul>
            {Data.unique_features.map(({ title, description }, index) => (
              <li key={index}>
                <h4>{title}</h4>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div id="prerequisites">
          <h2>Prerequisites</h2>
          <p className="mb-0">
            Before using Aqyre UI, make sure your project is set up with:
          </p>
          <ul>
            {Data.prerequisites.map(({ title, description, href }, index) => (
              <li key={index} className="">
                <h4>{title}: </h4>
                <p>
                  <Link href={href}>{description}</Link>
                </p>
              </li>
            ))}
            <p>
              Aqyre UI works seamlessly in Next.js apps. Learn more about{" "}
              <Link href="https://nextjs.org/docs">Next.js</Link>
            </p>
          </ul>
        </div>
      </article>
      <DocTracker />
    </section>
  );
};

export default Docs;
