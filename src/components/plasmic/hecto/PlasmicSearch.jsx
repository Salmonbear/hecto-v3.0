// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jLAmXkGdPPYDvKpL9j3cJd
// Component: HLCMdt64_9V
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import { DataFetcher } from "@plasmicpkgs/plasmic-query" // plasmic-import: ae7V86eNoXA/codeComponent
import HectoNav from "../../HectoNav" // plasmic-import: 1Xqtr1aGys/component
import Button from "../../Button" // plasmic-import: 16yj8MRmRBT/component
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_hecto.module.css" // plasmic-import: jLAmXkGdPPYDvKpL9j3cJd/projectcss
import * as sty from "./PlasmicSearch.module.css" // plasmic-import: HLCMdt64_9V/css

export const PlasmicSearch__VariantProps = new Array()

export const PlasmicSearch__ArgProps = new Array()

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn())

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    await promise
  })

export function Head() {
  return (
    <>
      <meta name="twitter:card" content="summary" />
      <title key="title">{PlasmicSearch.pageMetadata.title}</title>
      <meta
        key="og:title"
        property="og:title"
        content={PlasmicSearch.pageMetadata.title}
      />

      <meta
        key="twitter:title"
        name="twitter:title"
        content={PlasmicSearch.pageMetadata.title}
      />
    </>
  )
}

function PlasmicSearch__RenderFunc(props) {
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
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              sty.root
            )}
          >
            <div className={classNames(projectcss.all, sty.freeBox__hiXbx)}>
              <DataFetcher
                data-plasmic-name={"httpApiFetcher"}
                data-plasmic-override={overrides.httpApiFetcher}
                className={classNames("__wab_instance", sty.httpApiFetcher)}
                dataName={"fetchedData"}
                errorDisplay={
                  <ph.DataCtxReader>
                    {$ctx => (
                      <HectoNav
                        data-plasmic-name={"hectoNav"}
                        data-plasmic-override={overrides.hectoNav}
                        className={classNames("__wab_instance", sty.hectoNav)}
                      />
                    )}
                  </ph.DataCtxReader>
                }
                headers={{
                  "Content-Type": "application/json",
                  Accept: "application/json",
                }}
                loadingDisplay={
                  <ph.DataCtxReader>{$ctx => "Loading..."}</ph.DataCtxReader>
                }
                method={"GET"}
                noLayout={false}
                queryKey={""}
                url={
                  'https://www.hecto.io/version-test/api/1.1/obj/newsletter?constraint=[ { "key": "VERIFIED", "constraint_type": "is_not_empty" }]'
                }
              />

              <div className={classNames(projectcss.all, sty.freeBox__vw0Zr)}>
                <div className={classNames(projectcss.all, sty.freeBox__s2Jm)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__k7Dfy
                    )}
                  >
                    {"Error fetching data"}
                  </div>
                </div>
              </div>
            </div>

            {true ? (
              <section
                className={classNames(projectcss.all, sty.columns__ygArp)}
              >
                <div
                  data-plasmic-name={"outer"}
                  data-plasmic-override={overrides.outer}
                  className={classNames(projectcss.all, sty.outer)}
                >
                  <div
                    data-plasmic-name={"container"}
                    data-plasmic-override={overrides.container}
                    className={classNames(projectcss.all, sty.container)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__kFHrQ)}
                    >
                      <h2
                        data-plasmic-name={"h2"}
                        data-plasmic-override={overrides.h2}
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2
                        )}
                      >
                        {"To Make Requests For The\nFurther Information"}
                      </h2>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__sRtFe
                        )}
                      >
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        }
                      </div>
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__hIxAk)}
                    >
                      <Button
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        className={classNames("__wab_instance", sty.button)}
                        color={"blue"}
                        link={"#"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__tOpG
                          )}
                        >
                          {"Join With Now"}
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}

            <div className={classNames(projectcss.all, sty.freeBox__upMkq)}>
              <div className={classNames(projectcss.all, sty.columns__v4YGy)} />
            </div>

            <div className={classNames(projectcss.all, sty.freeBox___1QhWx)}>
              <div
                data-plasmic-name={"footerBottom"}
                data-plasmic-override={overrides.footerBottom}
                className={classNames(projectcss.all, sty.footerBottom)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___4Qypc)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__aGbxC
                    )}
                  >
                    {"© Hecto. All rights reserved"}
                  </div>

                  <p.PlasmicLink
                    data-plasmic-name={"link"}
                    data-plasmic-override={overrides.link}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link
                    )}
                    component={Link}
                    platform={"gatsby"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___3Km9W
                      )}
                    >
                      {"Privacy"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pZ8Jk
                      )}
                    >
                      {"Terms and Conditions"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__mgTyW
                      )}
                    >
                      {"Contact Us"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__eTrBf
                      )}
                    >
                      {"Blog"}
                    </div>
                  </p.PlasmicLink>
                </div>
              </div>
            </div>
          </p.Stack>
        ) : null}
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: [
    "root",
    "httpApiFetcher",
    "hectoNav",
    "outer",
    "container",
    "h2",
    "button",
    "footerBottom",
    "link",
  ],

  httpApiFetcher: ["httpApiFetcher", "hectoNav"],
  hectoNav: ["hectoNav"],
  outer: ["outer", "container", "h2", "button"],
  container: ["container", "h2", "button"],
  h2: ["h2"],
  button: ["button"],
  footerBottom: ["footerBottom", "link"],
  link: ["link"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSearch__ArgProps,
          internalVariantPropNames: PlasmicSearch__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicSearch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicSearch"
  } else {
    func.displayName = `PlasmicSearch.${nodeName}`
  }
  return func
}

export const PlasmicSearch = Object.assign(
  // Top-level PlasmicSearch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    httpApiFetcher: makeNodeComponent("httpApiFetcher"),
    hectoNav: makeNodeComponent("hectoNav"),
    outer: makeNodeComponent("outer"),
    container: makeNodeComponent("container"),
    h2: makeNodeComponent("h2"),
    button: makeNodeComponent("button"),
    footerBottom: makeNodeComponent("footerBottom"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicSearch
    internalVariantProps: PlasmicSearch__VariantProps,
    internalArgProps: PlasmicSearch__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Hecto | Newsletter advertising, simplified",
      description: "",
      ogImageSrc: "",
      canonical: "",
    },
  }
)

export default PlasmicSearch
/* prettier-ignore-end */
