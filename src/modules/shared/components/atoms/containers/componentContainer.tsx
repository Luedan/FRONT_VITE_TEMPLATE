import clsx from "clsx";
import React from "react";

export const ComponentContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={clsx("w-full border border-gray-300 rounded", className)}
  />
));

export const ContainerFluid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={clsx("w-[98%] h-full", className)} />
));
