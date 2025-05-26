import DocFooter from "@/components/sections/DocFooter";
import DocTracker from "@/components/sections/DocTracker";
import { CodeBlock } from "@/components/utility/code-block";
import { Data } from "@/constant";
import Link from "next/link";
import React from "react";

const Installation = () => {
  return (
    <section className="docs-section">
      <article className="docs-article">
        <div className="docs-div" id="overview">
          <h1 className="docs-h1">Installation</h1>
          <p className="docs-p">
            Aqyre UI doesn&apos;t require any additional libraries or tools,
            just copy & paste the component code into your project. Since it is
            built with Tailwind CSS and Shadcn, make sure you have Shadcn and
            Tailwind CSS installed in your project.
          </p>
          <p className="docs-p">
            {" "}
            For more details on setting up and using these, check the
            official&nbsp;
            <Link
              className="docs-a"
              href="https://ui.shadcn.com/docs/installation"
            >
              Shadcn
            </Link>{" "}
            Documentation and&nbsp;
            <Link
              className="docs-a"
              href="https://tailwindcss.com/docs/installation"
            >
              Tailwind
            </Link>{" "}
            CSS Documentation.
          </p>
        </div>

        <div className="docs-div" id="prerequisites">
          <h2 className="docs-h2">Install Prerequisites</h2>
          <p className="docs-p">
            Before using Aqyre UI, make sure your project is set up with:
          </p>
          <ul className="docs-ul">
            {Data.prerequisites.map(({ title, description, href }, index) => (
              <li className="docs-li" key={index}>
                <h4 className="docs-h4">
                  {title}:{" "}
                  <Link className="docs-a font-normal" href={href}>
                    {description}
                  </Link>
                </h4>
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

        <div className="docs-div" id="install-tabler">
          <h3 className="docs-h3">Install Tabler Icons</h3>
          <CodeBlock code={`npm install @tabler/icons-react`} language="bash" />
        </div>

        <DocFooter />
      </article>
      <DocTracker />
    </section>
  );
};

export default Installation;
