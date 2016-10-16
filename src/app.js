import React from "react";
import { render } from "react-dom";
import Label01 from "./components/atoms/Label/Label01.jsx";


render(
    <Label01 className="cool" text="HELLO, ME" />,
    document.getElementById('main')
);