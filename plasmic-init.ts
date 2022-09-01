import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { BlogFetcher, BlogPostFetcher, BlogField } from "./components/contentful";

import Button from "./lib/components/Button";
import Avatar from "./lib/components/Avatar";



export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "fHivtFZUbXCtndQjcV24fY",
      token: "IDu1Ofdg2kutYhZ63rojOnX2Dz78sAQgQIBm2w86vl0qjKmnNYB7nu3jxbAExLCyAqEEFH6XQmMsQZGPXQA",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

PLASMIC.registerComponent(BlogFetcher, {
  name: "BlogFetcher",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "vbox",
        children: [
          {
            type: "component",
            name: "BlogField",
          },
        ],
      },
    },
  },
});


PLASMIC.registerComponent(BlogPostFetcher, {
  name: "BlogPostFetcher",
  props: {
    slug: {
      type: "string",
      defaultValue: "image-and-table",
      options: ["image-and-table", "paragraph"],
    },
    children: {
      type: "slot",
      defaultValue: {
        type: "vbox",
        children: [
          {
            type: "component",
            name: "BlogField",
          },
        ],
      },
    },
  },
});

PLASMIC.registerComponent(BlogField, {
  name: "BlogField",
  props: {
    path: {
      type: "choice",
      options: (props, ctx) => ctx.fields,
    },
  },
});


PLASMIC.registerComponent(Button, {
  name: "Chakra-Button",
  props: {
    name: {
      type: "string",
      defaultValue: "Button",
    },
    colorScheme: {
      type: "choice",
      defaultValue: "blue",
      options: ["red", "green", "blue", "teal","pink", "purple", "cyan",  "orange", "yellow", "facebook", "messenger", "whiteAlpha", "blackAlpha"],
    },
    size: {
      type: "choice",
      defaultValue: "md",
      options: ["xs","sm","md","lg"],
    },
    variant: {
      type: "choice",
      defaultValue: "solid",
      options: ["solid", "outline", "ghost", "link"],
    },
    isActive: {
      type: "boolean",
      defaultValue: false,
      options: [false, true]
    },
    isLoading:{
      type: "boolean",
      defaultValue: false,
      options: [false, true]
    },
    loadingText: {
      type:"string",
      defaultValue: "Submitting",
    },
    spinnerPlacement:{
      type: "choice",
      defaultValue: "start",
      options: ["start", "end"],
    },
    iconPosition:{
      type: "choice",
      defaultValue: "",
      options: ["left", "right",],  
    },
    icon:{
      type: "choice",
      defaultValue: "",
      options: ["AddIcon", "ArrowBackIcon","ArrowDownIcon","ArrowForwardIcon","ArrowLeftIcon","ArrowRightIcon","ArrowUpDownIcon"],
    },
  },
});

PLASMIC.registerComponent(Avatar, {
  name: "Chakra-Avatar",
  props: {
    size: {
      type: "choice",
      defaultValue: "md",
      options: ["2xs", "xs","sm","md","lg", "xl","2xl"],
    },
    name: {
      type: "choice",
      defaultValue: "Dennis Ma",
      options:[
        "Dan Abrahmov",
        "Kola Tioluwani",
        "Kent Dodds",
        "Ryan Florence",
        "Prosper Otemuyiwa",
        "Christian Nwamba",
        "Segun Adebayo",
        "Benjamin Jackowitz",
        "Dennis Ma",
        ""
      ]
    },
    src: {
      type: "choice",
      defaultValue: "",
      options:[
        "https://bit.ly/dan-abramov",
        "https://bit.ly/tioluwani-kolawole",
        "https://bit.ly/kent-c-dodds",
        "https://bit.ly/ryan-florence",
        "https://bit.ly/prosper-baba",
        "https://bit.ly/code-beast",
        "https://bit.ly/sage-adebayo",
        "https://images.ctfassets.net/o80oqw32rhmg/2WMOrVT4gDEciD6c76FWRX/b9878d0302bdf0ffe8ce56a94faf9a4f/Screen_Shot_2022-08-26_at_7.34.24_PM.png",
        ""
      ]
    },
  },
});
