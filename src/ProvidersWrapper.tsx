import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ReactElement } from "react";
import { store } from "@redux/store";

export function ProvidersWrapper({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <Provider store={store}> */}
        {children}
        {/* </Provider> */}
      </QueryClientProvider>
    </>
  );
}
