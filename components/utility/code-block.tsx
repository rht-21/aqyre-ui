"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  IconCheck,
  IconCodeMinus,
  IconCodePlus,
  IconCopy,
} from "@tabler/icons-react";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";

type CodeBlockProps = {
  language: string;
  hide?: boolean;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  language,
  code,
  hide = false,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [hidden, setHidden] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  return (
    <div
      className={cn(
        "relative w-full rounded-lg bg-zinc-900 p-4 text-sm",
        hide && (hidden ? "h-80 overflow-hidden" : "h-auto")
      )}
    >
      <div className="flex flex-col gap-2">
        {tabsExist && (
          <div className="flex  overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 !py-2 text-xs transition-colors font-sans ${
                  activeTab === index
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {!tabsExist && language && (
          <div className="flex justify-between items-center py-1 ">
            <div className="text-xs text-zinc-400">{language}</div>
            <div className="flex items-center justify-end gap-4">
              {hide && (
                <button
                  onClick={() => {
                    setHidden(!hidden);
                  }}
                  className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer font-sans"
                >
                  {hidden ? (
                    <IconCodePlus size={14} />
                  ) : (
                    <IconCodeMinus size={14} />
                  )}
                </button>
              )}
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer font-sans"
              >
                {copied ? (
                  <IconCheck className="text-emerald-600" size={14} />
                ) : (
                  <IconCopy size={14} />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      <SyntaxHighlighter
        language={activeLanguage}
        style={a11yDark}
        customStyle={{
          width: "80vw",
          maxWidth: "800px",
          margin: 0,
          padding: 0,
          background: "transparent",
          fontSize: "0.875rem",
          fontFamily: "monospace",
        }}
        wrapLines={true}
        showLineNumbers={false}
        lineProps={(lineNumber: number) => ({
          style: {
            backgroundColor: activeHighlightLines.includes(lineNumber)
              ? "rgba(255,255,255,0.1)"
              : "transparent",
            display: "block",
            width: "100%",
          },
        })}
        PreTag="div"
      >
        {String(activeCode)}
      </SyntaxHighlighter>
    </div>
  );
};
