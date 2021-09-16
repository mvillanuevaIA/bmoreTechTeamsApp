import React from "react";
import "./App.css";
import { Image } from "@fluentui/react-northstar";
import { Provider, teamsTheme } from "@fluentui/react-northstar";

import banner from "./assets/banner.png";
import {
  ChatIcon,
  SendIcon,
  NumberListIcon,
  DoorArrowLeftIcon,
} from "@fluentui/react-icons-northstar";
import { useTeamsFx } from "./sample/lib/useTeamsFx";

//THIS CARECENTER COMPONENT OPENS THE LINKS OUTSIDE OF THE CLIENT AND USES HYPERLINKS AS BUTTONS
export default function CareCenter(props) {
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
            className="test-link"
            href="https://bmore.deskdirector.com/portal/v2/request-support/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Chat with a Technician</h3>
            <ChatIcon size="large" />
          </a>

          <a
            className="test-link"
            href="https://bmore.deskdirector.com/portal/v2/groups/my-tickets/tickets/requests?skip=0&take=25&state=open"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Create new Ticket</h3>
            <SendIcon size="large" />
          </a>

          <a
            className="test-link"
            href="https://bmore.deskdirector.com/portal/v2/groups/my-tickets/tickets?skip=0&take=25&state=open"
            target="_blank"
            rel="noreferrer"
          >
            <h3>My Tickets</h3>
            <NumberListIcon size="large" />
          </a>
        </div>

        <div class="test-row">
          <a
            className="test-link"
            href="https://bmore.connectboosterportal.com/authentication/login"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Payment Portal22</h3>
            <DoorArrowLeftIcon size="large" />
          </a>

          <a
            className="test-link"
            href="https://balttech.screenconnect.com/?Theme=Embedded"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Remote Support Tool</h3>
            <NumberListIcon size="large" />
          </a>

          <a
            className="test-link"
            href="https://bmoretechnology.com/support-options/remote-support-tool"
            target="_blank"
            rel="noreferrer"
          >
            <div className="div-button">
              <h3>Remote Support Login</h3>
              <NumberListIcon size="large" />
            </div>
          </a>
        </div>

        {/* <button
        className="test-link"
        onClick={() =>
          handleClick(
            "https://bmore.deskdirector.com/portal/v2/request-support/",
            "Chat with a Technician"
          )
        }
      >
        <h3>Chat with a Technician</h3>
        <ChatIcon size="large" />
      </button> */}
      </div>
    </Provider>
  );
}
