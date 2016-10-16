import "babel-polyfill";
import React from "react";
import { render } from 'react-dom';
import { Label01 } from "./components/atoms/Label/Label01";


render(
    <Label01 className="hello" text="HELLO, ME" />,
    document.getElementById('main')
);