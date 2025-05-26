import DocFooter from "@/components/sections/DocFooter";
import DocTracker from "@/components/sections/DocTracker";
import { CodeBlock } from "@/components/utility/code-block";
import ScrollTo from "@/components/utility/scroll-to";
import { Data } from "@/constant";
import Link from "next/link";
import React from "react";

const Installation = () => {
  return (
    <section className="docs-section">
      <article className="docs-article">
        <div className="docs-div" id="overview">
          <h1 className="docs-h1">Getting Started</h1>
          <p className="docs-p">
            Aqyre UI lets you build clean, responsive interfaces with ease. No
            installation needed — just copy and paste components directly into
            your project.
          </p>
          <p className="docs-p">
            We recommend using <strong>TypeScript</strong> for the best
            compatibility and type safety.
          </p>
          <p className="docs-p text-muted-foreground">
            Visit{" "}
            <Link
              className="docs-a"
              href="https://ui.shadcn.com/docs/installation"
            >
              ShadCN
            </Link>{" "}
            for detailed installation instructions.
          </p>
        </div>

        <div className="docs-div" id="requirements">
          <h2 className="docs-h2">Frameworks and Libraries</h2>
          <ul className="docs-ul">
            {Data.installation.requirements.map(
              ({ title, description, href }, index) => (
                <li className="docs-li" key={index}>
                  <h4 className="docs-h4">
                    <ScrollTo href={href}>{title}</ScrollTo>
                  </h4>
                  <p className="docs-p">{description}</p>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="docs-div" id="nextjs-docs">
          <h2 className="docs-h2">Setup Next.js with ShadCN</h2>
          <p className="docs-p">
            Run the init command to create a new Next.js project or to setup an
            existing one:
          </p>
          <CodeBlock code={Data.installation.nextjs.setup} language="bash" />
          <p className="docs-p text-muted-foreground">
            Choose between a Next.js project or a Monorepo.
          </p>

          <h3 className="docs-h3">Add Component</h3>
          <p className="docs-p">
            You can now start adding components to your project.
          </p>
          <CodeBlock
            code={Data.installation.nextjs.component}
            language="bash"
          />

          <p className="docs-p text-muted-foreground">
            The command above will add the Button component to your project. You
            can then import it like this:
          </p>

          <h3 className="docs-h3">Usage</h3>
          <CodeBlock code={Data.installation.nextjs.usage} language="tsx" />
        </div>

        <div className="docs-div" id="react-docs">
          <h2 className="docs-h2">Setup Vite Project with ShadCN</h2>
          <p className="docs-p">
            Start by creating a new React project using vite. Select the React +
            TypeScript template:{" "}
          </p>
          <CodeBlock code={Data.installation.vite.setup} language="bash" />

          <h3 className="docs-h3">Add Tailwind CSS</h3>
          <CodeBlock code={Data.installation.vite.tailwind} language="bash" />
          <p className="docs-p text-muted-foreground">
            Replace everything in src/index.css with the following:
          </p>
          <CodeBlock code={Data.installation.vite.css} language="css" />

          <h4 className="docs-h4">Edit tsconfig.json file</h4>
          <p>
            The current version of Vite splits TypeScript configuration into
            three files, two of which need to be edited. Add the baseUrl and
            paths properties to the compilerOptions section of the tsconfig.json
            and tsconfig.app.json files:
          </p>
          <CodeBlock
            code={Data.installation.vite.tsconfig}
            language="json"
            showLineNumbers
            highlightLines={[11, 12, 13, 14, 15, 16]}
          />

          <h4 className="docs-h4">Edit tsconfig.app.json file</h4>
          <p>
            Add the following code to the tsconfig.app.json file to resolve
            paths, for your IDE:
          </p>
          <CodeBlock
            code={Data.installation.vite.tsconfig_app}
            language="json"
            showLineNumbers
            highlightLines={[4, 5, 6, 7, 8, 9]}
          />

          <h4 className="docs-h4">Update vite.config.ts</h4>
          <p>
            Add the following code to the vite.config.ts so your app can resolve
            paths without error:
          </p>
          <CodeBlock code={Data.installation.vite.types} language="bash" />
          <CodeBlock
            code={Data.installation.vite.vite_config}
            language="ts"
            showLineNumbers
            highlightLines={[1, 2, 8, 9, 10, 11, 12, 13]}
          />

          <h3 className="docs-h3">Run ShadCN CLI</h3>
          <p className="docs-p">
            Run the shadcn init command to setup your project:
          </p>
          <CodeBlock code={Data.installation.shadcn.setup} language="bash" />

          <h4 className="docs-h4">
            You will be asked a few questions to configure components.json.
          </h4>
          <CodeBlock code={Data.installation.shadcn.color} language="" />

          <h3 className="docs-h3">Add Component</h3>
          <p className="docs-p">
            You can now start adding components to your project.
          </p>
          <CodeBlock
            code={Data.installation.shadcn.component}
            language="bash"
          />

          <p className="docs-p text-muted-foreground">
            The command above will add the Button component to your project. You
            can then import it like this:
          </p>

          <h3 className="docs-h3">Usage</h3>
          <CodeBlock code={Data.installation.shadcn.usage} language="tsx" />
        </div>

        <div className="docs-div" id="tabler-docs">
          <h2 className="docs-h2">Install Tabler Icons</h2>
          <p className="docs-p">
            Some components use <strong>Tabler Icons</strong> for elegant,
            minimal icons. You can install them using:
          </p>
          <CodeBlock code={Data.installation.tabler.setup} language="bash" />
          <p className="docs-p text-muted-foreground">
            PS: You can change the icons used in the components any time.
          </p>

          <h3 className="docs-h3">Usage:</h3>
          <CodeBlock code={Data.installation.tabler.usage} language="tsx" />
        </div>

        <DocFooter />
      </article>
      <DocTracker />
    </section>
  );
};

export default Installation;
