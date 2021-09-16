import React from "react";
import "./App.css";
import { Image } from "@fluentui/react-northstar";
import banner from "./assets/banner.png";
import {
  ChatIcon,
  SendIcon,
  NumberListIcon,
  DoorArrowLeftIcon,
} from "@fluentui/react-icons-northstar";

//THIS CARECENTER COMPONENT OPENS LINKS INSIDE OF THE CLIENT
export default function CareCenter(props) {
  const handleClick = (url, page) => {
    props.sendURL(url, page);
  };

  return (
    <div class="page-container">
      <div class="header">
        <Image fluid src={banner}></Image>
      </div>

      <div class="test-row">
        <button
          className="test-link"
          onClick={() =>
            handleClick(
              "https://bmore.deskdirector.com/",
              "Chat with a Technician"
            )
          }
        >
          <h3>Chat with a Technician</h3>
          <ChatIcon size="large" />
        </button>

        <button
          className="test-link"
          onClick={() =>
            handleClick(
              "https://bmore.deskdirector.com/portal/v2/groups/my-tickets/tickets/requests?skip=0&take=25&state=open",
              "Create new Ticket"
            )
          }
        >
          <h3>Create new Ticket</h3>
          <SendIcon size="large" />
        </button>

        <button
          className="test-link"
          onClick={() =>
            handleClick(
              "https://bmore.deskdirector.com/portal/v2/groups/my-tickets/tickets?skip=0&take=25&state=open",
              "My Tickets"
            )
          }
        >
          <h3>My Tickets</h3>
          <NumberListIcon size="large" />
        </button>
      </div>

      <div class="test-row">
        <button
          className="test-link"
          onClick={() =>
            handleClick(
              "https://bmore.connectboosterportal.com/authentication/login",
              "Payment Portal"
            )
          }
        >
          <h3>Payment Portal</h3>
          <DoorArrowLeftIcon size="large" />
        </button>

        <button
          className="test-link"
          onClick={() =>
            handleClick(
              "https://balttech.screenconnect.com/?Theme=Embedded",
              "Remote Support Tool"
            )
          }
        >
          <h3>Remote Support Tool</h3>
          <NumberListIcon size="large" />
        </button>
        <a
          className="test-link"
          href="https://bmoretechnology.com/support-options/remote-support-tool"
          target="_blank"
          rel="noreferrer"
        >
          <h3>Remote Support Login</h3>
          <NumberListIcon size="large" />
        </a>
        {/* <button
          className="test-link"
          onClick={() =>
            handleClick(
              "https://bmoretechnology.com/support-options/remote-support-tool",
              "Remote Support Login"
            )
          }
        >
          <h3>Remote Support Tool</h3>
          <NumberListIcon size="large" />
        </button> */}
      </div>
    </div>
  );
}
