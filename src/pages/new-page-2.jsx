// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react"
import * as ph from "@plasmicapp/host"
import GlobalContextsProvider from "../components/plasmic/hecto/PlasmicGlobalContextsProvider"
import { UnnamedGlobalGroupOfVariantsContext } from "../components/plasmic/hecto/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants"
import {
  PlasmicNewPage2,
  Head,
} from "../components/plasmic/hecto/PlasmicNewPage2"

export { Head }

function NewPage2({ location, params }) {
  // Use PlasmicNewPage2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicNewPage2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicNewPage2 is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Gatsby "wrapRootElement" function
  // (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr#wrapRootElement).
  return (
    <UnnamedGlobalGroupOfVariantsContext.Provider value={undefined}>
      <GlobalContextsProvider>
        <ph.PageParamsProvider
          params={params}
          query={Object.fromEntries(new URLSearchParams(location.search))}
        >
          <PlasmicNewPage2 />
        </ph.PageParamsProvider>
      </GlobalContextsProvider>
    </UnnamedGlobalGroupOfVariantsContext.Provider>
  )
}

export default NewPage2