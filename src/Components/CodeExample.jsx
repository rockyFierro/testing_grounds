import React, { Component } from "react";

export const Example = ({ description, input }) => {
  return (
    <div className="code_example">
      <h3>{description}</h3>
      <pre>
        <code>{input}</code>
      </pre>
    </div>
  );
};
