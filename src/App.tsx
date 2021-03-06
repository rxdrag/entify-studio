import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeModeState } from "recoil/atoms";
import { useInit } from "hooks/useInit";
import { useShowServerError } from "hooks/useShowServerError";
import "./App.css";
import Loading from "./components/common/loading";
import { Login } from "./components/login";
import { Studio } from "./components/studio";
import { ConfirmDialog } from "./components/widgets/ConfirmDialog";
import { ErrorDialog } from "./components/widgets/ErrorDialog";
import { SuccessAlertBar } from "./components/widgets/SuccessAlertBar";
import { INDEX_URL, LOGIN_URL, PRIMARY_COLOR } from "./util/consts";
import { useIntl } from "./util/useIntl";
import useShadows from "./util/useShadows";
import { AppErrorDialog } from "components/widgets/AppErrorDialog";

function App() {
  const themeMode = useRecoilValue(themeModeState);
  const [langLoading] = useIntl();
  const { loading, error } = useInit();
  useShowServerError(error);
  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: PRIMARY_COLOR,
      },
    },

    shadows: [...useShadows()] as any,
  });

  return langLoading || loading ? (
    <Loading />
  ) : (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path={LOGIN_URL} component={Login}></Route>
          <Route path={INDEX_URL} component={Studio}></Route>
          <Redirect to={INDEX_URL} from="/" />
        </Switch>
        <SuccessAlertBar />
        <ErrorDialog />
        <AppErrorDialog />
        <ConfirmDialog />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
