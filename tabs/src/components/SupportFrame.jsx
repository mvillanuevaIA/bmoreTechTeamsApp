import React from "react";
import "./App.css";
export default function SupportFrame(props) {
  return <iframe src={props.siteURL} title={props.site}></iframe>;
}
