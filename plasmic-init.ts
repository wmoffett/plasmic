import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { ContentfulFetcher as ContentfulFetcherOrig, ContentfulField as ContentfulFieldOrig} from "./components/contentful";

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

PLASMIC.registerComponent(ContentfulFetcherOrig, {
  name: "ContentfulFetcherOrig",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "vbox",
        children: [
          {
            type: "component",
            name: "ContentfulFieldOrig",
          },
        ],
      },
    },
  },
});

PLASMIC.registerComponent(ContentfulFieldOrig, {
  name: "ContentfulFieldOrig",
  props: {
    path: {
      type: "choice",
      options: (props, ctx) => ctx.fields,
    },
  },
});