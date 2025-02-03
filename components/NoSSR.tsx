import dynamic from "next/dynamic";
import React from "react";

function NoSSR({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}

// Export the dynamic component with SSR disabled
export default dynamic(() => Promise.resolve(NoSSR), { ssr: false });
