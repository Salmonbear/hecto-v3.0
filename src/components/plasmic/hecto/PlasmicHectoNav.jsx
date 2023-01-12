// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jLAmXkGdPPYDvKpL9j3cJd
// Component: 1Xqtr1aGys
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import { NavigationBar } from "@plasmicpkgs/plasmic-nav" // plasmic-import: jGx9tiKJoex/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_hecto.module.css" // plasmic-import: jLAmXkGdPPYDvKpL9j3cJd/projectcss
import * as sty from "./PlasmicHectoNav.module.css" // plasmic-import: 1Xqtr1aGys/css

export const PlasmicHectoNav__VariantProps = new Array()

export const PlasmicHectoNav__ArgProps = new Array()

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn())

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    await promise
  })

function PlasmicHectoNav__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = {
    ...args,
    ...variants,
  }

  const currentUser = p.useCurrentUser?.() || {}
  const [$queries, setDollarQueries] = React.useState({})
  return (
    <NavigationBar
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <p.PlasmicLink
          className={classNames(projectcss.all, projectcss.a, sty.link__dhYtV)}
          component={Link}
          href={"#"}
          platform={"gatsby"}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <React.Fragment>
              <React.Fragment>{"hecto"}</React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#FF0000" }}
              >
                {"."}
              </span>
            </React.Fragment>
          </div>
        </p.PlasmicLink>
      }
      className={classNames("__wab_instance", sty.root)}
      closeButton={
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img___4Cdh)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/close.svg"}
        />
      }
      itemsGap={8}
      menuItems={
        <React.Fragment>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__gyu5T
            )}
            component={Link}
            href={"https://app.hecto.io/newsletter-creators"}
            platform={"gatsby"}
            title={"Creators"}
          >
            {"Creators"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__sbdo8
            )}
            component={Link}
            href={`/resources`}
            platform={"gatsby"}
          >
            {"Resources"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__esyf1
            )}
            component={Link}
            href={"https://app.hecto.io/search"}
            platform={"gatsby"}
          >
            {"Search"}
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"pricing"}
            data-plasmic-override={overrides.pricing}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.pricing
            )}
            component={Link}
            href={"https://app.hecto.io/pricing"}
            platform={"gatsby"}
          >
            {"Pricing"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__ywDm
            )}
            component={Link}
            href={"https://hecto.io/login"}
            platform={"gatsby"}
          >
            {"Sign In"}
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"signUp"}
            data-plasmic-override={overrides.signUp}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.signUp
            )}
            component={Link}
            href={"https://hecto.io/login"}
            platform={"gatsby"}
          >
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700, color: "#FFFFFF" }}
              >
                {"Sign Up"}
              </span>
            </React.Fragment>
          </p.PlasmicLink>
        </React.Fragment>
      }
      openButton={
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__jPdEs)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/menu.svg"}
        />
      }
      responsiveBreakpoint={768}
    />
  )
}

const PlasmicDescendants = {
  root: ["root", "text", "pricing", "signUp"],
  text: ["text"],
  pricing: ["pricing"],
  signUp: ["signUp"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHectoNav__ArgProps,
          internalVariantPropNames: PlasmicHectoNav__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicHectoNav__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHectoNav"
  } else {
    func.displayName = `PlasmicHectoNav.${nodeName}`
  }
  return func
}

export const PlasmicHectoNav = Object.assign(
  // Top-level PlasmicHectoNav renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    pricing: makeNodeComponent("pricing"),
    signUp: makeNodeComponent("signUp"),
    // Metadata about props expected for PlasmicHectoNav
    internalVariantProps: PlasmicHectoNav__VariantProps,
    internalArgProps: PlasmicHectoNav__ArgProps,
  }
)

export default PlasmicHectoNav
/* prettier-ignore-end */
