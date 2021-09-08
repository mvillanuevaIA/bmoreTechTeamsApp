import React from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { Provider, teamsTheme } from "@fluentui/react-northstar";
import { useTeamsFx } from "./sample/lib/useTeamsFx";

import "./App.css";
import { Image } from "@fluentui/react-northstar";
import banner from "./assets/banner.png";
import {
  ChatIcon,
  SendIcon,
  NumberListIcon,
  DoorArrowLeftIcon,
} from "@fluentui/react-icons-northstar";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */

export default function App() {
  const { theme, loading } = useTeamsFx();
  return (
    <Provider
      theme={theme || teamsTheme}
      styles={{ backgroundColor: "#eeeeee" }}
    >
      <div class="page-container">
        <div class="header">
          <Image fluid src={banner}></Image>
        </div>

        <div class="test-row">
          <a
            class="test-link"
            href="https://bmore.connectboosterportal.com/authentication/login"
            target="_blank"
            rel="noreferrer"
          >
            <h1>
              Chat with <br />a<br /> Technician
            </h1>
            <ChatIcon size="largest" />
          </a>

          <a
            class="test-link"
            href="https://bmore.connectboosterportal.com/authentication/login"
            target="_blank"
            rel="noreferrer"
          >
            <h1>Create new Ticket</h1>
            <SendIcon size="largest" />
          </a>
        </div>

        <div class="test-row">
          <a
            class="test-link"
            href="https://bmore.connectboosterportal.com/authentication/login"
            target="_blank"
            rel="noreferrer"
          >
            <h1>My Tickets</h1>
            <NumberListIcon size="largest" />
          </a>
          <a
            class="test-link"
            href="https://bmore.connectboosterportal.com/authentication/login"
            target="_blank"
            rel="noreferrer"
          >
            <h1>Payment Portal</h1>
            <DoorArrowLeftIcon size="largest" />
          </a>
        </div>
      </div>
    </Provider>
  );
}
