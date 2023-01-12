// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jLAmXkGdPPYDvKpL9j3cJd
// Component: C5n9cmwHg6f
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import HectoNav from "../../HectoNav" // plasmic-import: 1Xqtr1aGys/component
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms" // plasmic-import: 8N9-WfZSaq/codeComponent
import Button from "../../Button" // plasmic-import: 16yj8MRmRBT/component
import { useScreenVariants as useScreenVariantskILw5UiAaS1UF } from "./PlasmicGlobalVariant__Screen" // plasmic-import: kILw5uiAaS1uF/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_hecto.module.css" // plasmic-import: jLAmXkGdPPYDvKpL9j3cJd/projectcss
import * as sty from "./PlasmicBlog.module.css" // plasmic-import: C5n9cmwHg6f/css
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg" // plasmic-import: g1j_XxrLjbNK/icon

export const PlasmicBlog__VariantProps = new Array()

export const PlasmicBlog__ArgProps = new Array()

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
      <title key="title">{PlasmicBlog.pageMetadata.title}</title>
      <meta
        key="og:title"
        property="og:title"
        content={PlasmicBlog.pageMetadata.title}
      />

      <meta
        key="twitter:title"
        name="twitter:title"
        content={PlasmicBlog.pageMetadata.title}
      />
    </>
  )
}

function PlasmicBlog__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = {
    ...args,
    ...variants,
  }

  const currentUser = p.useCurrentUser?.() || {}
  const [$queries, setDollarQueries] = React.useState({})
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantskILw5UiAaS1UF(),
  })

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
            <div className={classNames(projectcss.all, sty.freeBox__uXfUn)}>
              <div className={classNames(projectcss.all, sty.freeBox__jNgxc)}>
                <HectoNav
                  data-plasmic-name={"hectoNav"}
                  data-plasmic-override={overrides.hectoNav}
                  className={classNames("__wab_instance", sty.hectoNav)}
                />

                <div
                  data-plasmic-name={"heroHorizontal"}
                  data-plasmic-override={overrides.heroHorizontal}
                  className={classNames(projectcss.all, sty.heroHorizontal)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___7DL75)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__pwmsv)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___2Bsss
                        )}
                      >
                        <h1
                          className={classNames(
                            projectcss.all,
                            projectcss.h1,
                            projectcss.__wab_text,
                            sty.h1__rZvMn
                          )}
                        >
                          <React.Fragment>
                            <React.Fragment>{""}</React.Fragment>
                            {
                              <h1
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h1,
                                  projectcss.__wab_text,
                                  sty.h1__haaBt
                                )}
                              >
                                <React.Fragment>
                                  <span
                                    className={
                                      "plasmic_default__all plasmic_default__span"
                                    }
                                    style={{
                                      color: "#0506CF",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {"Hecto Resources"}
                                  </span>
                                  <React.Fragment>{""}</React.Fragment>
                                  <span
                                    className={
                                      "plasmic_default__all plasmic_default__span"
                                    }
                                    style={{
                                      color: "#FF4A03",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {"."}
                                  </span>
                                </React.Fragment>
                              </h1>
                            }

                            <React.Fragment>{""}</React.Fragment>
                          </React.Fragment>
                        </h1>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__xSvDh
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#0D08FF" }}
                            >
                              {"Hi, I'm "}
                            </span>
                            <React.Fragment>{""}</React.Fragment>
                            {
                              <p.PlasmicLink
                                className={classNames(
                                  projectcss.all,
                                  projectcss.a,
                                  projectcss.__wab_text,
                                  projectcss.plasmic_default__inline,
                                  sty.link__xe4M
                                )}
                                component={Link}
                                href={"https://twitter.com/thedudlian"}
                                platform={"gatsby"}
                              >
                                <React.Fragment>
                                  <span
                                    className={
                                      "plasmic_default__all plasmic_default__span"
                                    }
                                    style={{ color: "#FF7C08" }}
                                  >
                                    {"Simon"}
                                  </span>
                                </React.Fragment>
                              </p.PlasmicLink>
                            }

                            <React.Fragment>{""}</React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#0D08FF" }}
                            >
                              {
                                " and I'm building Hecto, the sponsorship platform to support the newsletter creator economy. "
                              }
                            </span>
                            <React.Fragment>{"\n"}</React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#0D08FF" }}
                            >
                              {""}
                            </span>
                            <React.Fragment>{"\n"}</React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#0D08FF" }}
                            >
                              {"Read all about the journey here."}
                            </span>
                          </React.Fragment>
                        </div>
                      </p.Stack>
                    </p.Stack>
                  </p.Stack>
                </div>
              </div>
            </div>

            {true ? (
              <section
                data-plasmic-name={"features"}
                data-plasmic-override={overrides.features}
                className={classNames(projectcss.all, sty.features)}
              >
                <div
                  data-plasmic-name={"blogColumn"}
                  data-plasmic-override={overrides.blogColumn}
                  className={classNames(projectcss.all, sty.blogColumn)}
                >
                  <CmsQueryRepeater
                    data-plasmic-name={"resourcesBlogCms"}
                    data-plasmic-override={overrides.resourcesBlogCms}
                    className={classNames(
                      "__wab_instance",
                      sty.resourcesBlogCms
                    )}
                    desc={false}
                    emptyMessage={
                      <ph.DataCtxReader>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___3YyKn
                            )}
                          >
                            {"No matching published entries found."}
                          </div>
                        )}
                      </ph.DataCtxReader>
                    }
                    filterField={"h1Heading"}
                    forceEmptyState={false}
                    forceLoadingState={false}
                    limit={0}
                    loadingMessage={
                      <ph.DataCtxReader>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__fEne
                            )}
                          >
                            {"Loading..."}
                          </div>
                        )}
                      </ph.DataCtxReader>
                    }
                    noAutoRepeat={false}
                    noLayout={false}
                    useDraft={false}
                  >
                    <ph.DataCtxReader>
                      {$ctx => (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__tUoe1
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__iDw87
                            )}
                          >
                            {(() => {
                              try {
                                return $ctx.plasmicCmsBlogArticlesItem.data
                                  .h1Heading
                              } catch (e) {
                                if (e instanceof TypeError) {
                                  return "Enter some text"
                                }
                                throw e
                              }
                            })()}
                          </div>
                        </div>
                      )}
                    </ph.DataCtxReader>
                  </CmsQueryRepeater>
                </div>
              </section>
            ) : null}
            {true ? (
              <section
                className={classNames(projectcss.all, sty.columns___65Mi9)}
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
                      className={classNames(projectcss.all, sty.column__fUvPn)}
                    >
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__nc1Lp
                        )}
                      >
                        {"To Make Requests For The\nFurther Information"}
                      </h2>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__r4Jdi
                        )}
                      >
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        }
                      </div>
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__xrUue)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__zdf22
                        )}
                        color={"blue"}
                        link={"#"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__m73Sy
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

            <div className={classNames(projectcss.all, sty.freeBox__g0Lc8)}>
              <div className={classNames(projectcss.all, sty.columns___8Y8Fy)}>
                <div className={classNames(projectcss.all, sty.column__kzkPi)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__uXj9O
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#000000" }}
                      >
                        {"Ready to start your campaign?"}
                      </span>
                    </React.Fragment>
                  </h2>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hpJPx
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#000000" }}
                      >
                        {"Find the perfect newsletter for your brand"}
                      </span>
                    </React.Fragment>
                  </div>

                  <Button
                    className={classNames("__wab_instance", sty.button__qI4JW)}
                    color={"blue"}
                    endIcon={
                      <ArrowRightsvgIcon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(projectcss.all, sty.svg)}
                        role={"img"}
                      />
                    }
                    shape={"rounded"}
                    showEndIcon={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__r5SkQ
                      )}
                    >
                      {"Search Newsletters"}
                    </div>
                  </Button>
                </div>
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__sok7B)}>
              <div
                data-plasmic-name={"footerBottom"}
                data-plasmic-override={overrides.footerBottom}
                className={classNames(projectcss.all, sty.footerBottom)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__p5Zc)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wJp9
                    )}
                  >
                    {"© Hecto . All rights reserved"}
                  </div>

                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__lYcHz
                    )}
                    component={Link}
                    platform={"gatsby"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__efgNc
                      )}
                    >
                      {"Privacy"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__zpMbw
                      )}
                    >
                      {"Terms and Conditions"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kvTqd
                      )}
                    >
                      {"Contact Us"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__um3IN
                      )}
                    >
                      {"Blog"}
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.freeBox__mZlUf)}
                    />
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
    "hectoNav",
    "heroHorizontal",
    "features",
    "blogColumn",
    "resourcesBlogCms",
    "outer",
    "container",
    "svg",
    "footerBottom",
  ],

  hectoNav: ["hectoNav"],
  heroHorizontal: ["heroHorizontal"],
  features: ["features", "blogColumn", "resourcesBlogCms"],
  blogColumn: ["blogColumn", "resourcesBlogCms"],
  resourcesBlogCms: ["resourcesBlogCms"],
  outer: ["outer", "container"],
  container: ["container"],
  svg: ["svg"],
  footerBottom: ["footerBottom"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicBlog__ArgProps,
          internalVariantPropNames: PlasmicBlog__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicBlog__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicBlog"
  } else {
    func.displayName = `PlasmicBlog.${nodeName}`
  }
  return func
}

export const PlasmicBlog = Object.assign(
  // Top-level PlasmicBlog renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    hectoNav: makeNodeComponent("hectoNav"),
    heroHorizontal: makeNodeComponent("heroHorizontal"),
    features: makeNodeComponent("features"),
    blogColumn: makeNodeComponent("blogColumn"),
    resourcesBlogCms: makeNodeComponent("resourcesBlogCms"),
    outer: makeNodeComponent("outer"),
    container: makeNodeComponent("container"),
    svg: makeNodeComponent("svg"),
    footerBottom: makeNodeComponent("footerBottom"),
    // Metadata about props expected for PlasmicBlog
    internalVariantProps: PlasmicBlog__VariantProps,
    internalArgProps: PlasmicBlog__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Hecto | Newsletter advertising, simplified",
      description: "",
      ogImageSrc: "",
      canonical: "",
    },
  }
)

export default PlasmicBlog
/* prettier-ignore-end */
