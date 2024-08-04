import clsx from "clsx";
import React from "react";

type ContainerGridProps = {
  maxCols?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.HTMLAttributes<HTMLDivElement>;

const ContainerGrid = React.forwardRef<HTMLDivElement, ContainerGridProps>(
  ({ maxCols = 4, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "grid gap-6 p-6",
          {
            "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6":
              maxCols === 6,
            "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5":
              maxCols === 5,
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4":
              !maxCols || maxCols === 4,
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3":
              maxCols === 3,
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2":
              maxCols === 2,
            "grid-cols-1": maxCols === 1,
          },
          className,
        )}
        {...props}
      />
    );
  },
);
ContainerGrid.displayName = "ContainerGrid";

export { ContainerGrid };
