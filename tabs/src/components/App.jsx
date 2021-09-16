import React, { useState, useEffect } from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { Provider, teamsTheme } from "@fluentui/react-northstar";
import { useTeamsFx } from "./sample/lib/useTeamsFx";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Breadcrumb } from "@fluentui/react-northstar";
import CareCenter from "./CareCenter.jsx";
import CareCenter2 from "./CareCenter2.jsx";
import SupportFrame from "./SupportFrame";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */

export default function App() {
  const { theme, loading } = useTeamsFx();
  const [page, setPage] = useState("Care Center");
  const [url, setURL] = useState("");
  const getURL = (url, page) => {
    setPage(page);
    setURL(url);
  };

  const careCenter = (
    <Provider
      theme={theme || teamsTheme}
      styles={{ backgroundColor: "#eeeeee" }}
    >
      <div className="nav">
        <Breadcrumb aria-label="breadcrumb">
          <Breadcrumb.Item>
            <Breadcrumb.Link href="">
              <h5>Care Center</h5>
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Divider />
          <Breadcrumb.Item>
            {page === "Care Center" ? "" : page}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {/*Display the button link in an iFrame on click, else display Care Center Buttons  */}
      {page === "Care Center" ? (
        <CareCenter2 sendURL={getURL} />
      ) : (
        <SupportFrame site={page} siteURL={url} />
      )}
    </Provider>
  );

  return (
    <div>
      <Switch>
        <Route exact path="/index.html/">
          {careCenter}
          {/* <SupportFrame
            site="Care Center"
            siteUrl="https://bmore.deskdirector.com/"
          /> */}
        </Route>
        <Route path="/index.html/tab2">
          <CareCenter />
        </Route>
      </Switch>
    </div>
  );
}
