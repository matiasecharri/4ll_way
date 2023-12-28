import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
import React from "https://esm.sh/react@18.2.0/client";

const $appDomElement = document.getElementById("app"); //Container
const root = ReactDOM.createRoot($appDomElement); //Now de container is the root
const craft = React.createElement;

const $button = craft("button", { "data-id": 123 }, "Me gusta"); //Elements to render
const $button2 = craft("button", { "data-id": 456 }, "Me gusta");
const $button3 = craft("button", { "data-id": 789 }, "Me gusta");

const $app = craft("React.Fragment", null[($button, $button2, $button3)]); //Similar as fragment

root.render($app); //Final render
