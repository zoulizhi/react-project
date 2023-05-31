import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import routes from "./router";
import LZAppHeader from "components/app-header";
import LZAppFooter from "components/app-footer";
import { HashRouter, Switch } from "react-router-dom";

const App = memo(() => {
  return (
    <HashRouter>
      <LZAppHeader /> <Switch> {renderRoutes(routes)} </Switch> <LZAppFooter />
    </HashRouter>
  );
});

export default App;
