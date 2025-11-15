"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  location?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  location
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
          <div className="flex items-start justify-between gap-x-2 text-base">
  {/* LEFT SIDE: title + badges + subtitle */}
  <div className="flex flex-col">
    <h3 className="inline-flex items-center font-semibold leading-none text-xs sm:text-sm">
      {title}

      {badges && (
        <span className="inline-flex gap-x-1 ml-2">
          {badges.map((badge, index) => (
            <Badge
              variant="secondary"
              className="align-middle text-xs"
              key={index}
            >
              {badge}
            </Badge>
          ))}
        </span>
      )}
    </h3>

    {/* Subtitle directly below title */}
    {subtitle && (
      <p className="text-xs text-muted-foreground mt-1">
        {subtitle}
      </p>
    )}
  </div>

  {/* RIGHT SIDE: period + location */}
  <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
    {period}
    {location && <div className="text-xs sm:text-sm">{location}</div>}
  </div>
</div>
          </CardHeader>
          {description && (
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              {description}
            </p>
          )}

        </div>
      </Card>
    </Link>
  );
};
