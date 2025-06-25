import { cn } from "../lib/utils";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("mx-auto max-w-screen-2xl px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
