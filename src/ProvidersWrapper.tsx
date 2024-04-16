import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ReactElement } from "react";
import { store } from "@redux/store";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { createUseCache } from "tss-react/makeStyles";
import { CacheProvider } from "@emotion/react";
import { theme } from "@constants/theme";

export function ProvidersWrapper({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const queryClient = new QueryClient();

  // Create RTL cache
  // const cacheRtl = createUseCache({
  //   key: "muirtl",
  //   stylisPlugins: [require("stylis-plugin-rtl")()],
  // });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <CacheProvider value={cacheRtl}> */}
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledEngineProvider>
        {/* </CacheProvider> */}
      </QueryClientProvider>
    </>
  );
}
