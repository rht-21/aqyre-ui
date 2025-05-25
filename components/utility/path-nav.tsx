"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SidebarData } from "@/constant";

const PathNav = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const paths = segments.map(
    (_, index) => "/" + segments.slice(0, index + 1).join("/")
  );

  return (
    <Breadcrumb id="overview">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === segments.length - 1 ? (
                <BreadcrumbPage className="capitalize text-aqyre-primary">
                  {segment &&
                    (() => {
                      const sources = [
                        ...SidebarData.Docs,
                        ...SidebarData.Components,
                      ];
                      const matchedItem = sources.find(
                        (item) => item.href.split("/").pop() === segment
                      );
                      return matchedItem
                        ? matchedItem.alias || matchedItem.label
                        : null;
                    })()}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={paths[index]} className="capitalize">
                    {segment}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PathNav;
