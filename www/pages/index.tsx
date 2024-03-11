import React, { Fragment, useState } from 'react'
import type { GetStaticProps } from 'next'
import { Head } from '@rdub/next-base/head'
import css from './index.module.scss'
import A from "@rdub/next-base/a";
import { Nav } from "@rdub/next-base/nav";
import { getBasePath } from "@rdub/next-base/basePath"
import { Socials } from "@rdub/next-base/socials"
import { url } from "@/src/site";
import { GitHub, crashDataEmail } from "@/src/socials"
import { plotSpecs } from "@/src/plotSpecs";
import { buildPlot, buildPlots, Plot, PlotsDict } from "@rdub/next-plotly/plot";
import { loadPlots } from "@rdub/next-plotly/plot-load";
import * as Njsp from "@/src/njsp/plot";
import { NjspPlot } from "@/src/njsp/plot";
import { loadProps } from "@/server/njsp/plot";
import { NjdotRawData, NjspFatalAcc } from "@/src/urls";
import Footer from '@/src/footer';

type Props = {
    plotsDict: PlotsDict
    njspProps: Njsp.Props
}

export const getStaticProps: GetStaticProps = async () => {
    const plotsDict: PlotsDict = loadPlots(plotSpecs)
    const njspProps = await loadProps()
    return { props: { plotsDict, njspProps, }, }
}

const Home = ({ plotsDict, njspProps }: Props) => {
    const basePath = getBasePath()

    const [ njspPlotSpec, ...plotSpecs2 ] = plotSpecs
    const njspPlot = buildPlot(njspPlotSpec, plotsDict[njspPlotSpec.id])
    const plots: Plot[] = buildPlots(plotSpecs2, plotsDict)
    const sections = [ njspPlot, ...plots ].map(({id, title, menuName, dropdownSection,}) => ({id, name: menuName || title, dropdownSection}))
    const menus = [
        { id: "NJSP", name: "NJSP", },
        { id: "state-years", name: "State x Years", },
        { id: "county-years", name: "Counties x Years", },
        { id: "state-months", name: "State x Months", },
        { id: "county-months", name: "Counties x Months", },
    ].map(s => ({
        ...s,
        sections: sections.filter(({dropdownSection}) => s.name == dropdownSection)
    }))

    const title = "NJ Traffic Crash Data"

    const [ county, setCounty ] = useState<string | null>(null)

    return (
        <div className={css.container}>
            <Head
                title={title}
                description={"Analysis & Visualization of traffic crash data published by NJ State Police and NJ DOT"}
                url={url}
                thumbnail={`${url}/plots/fatalities_per_year_by_type.png`}
            />

            <Nav
                id={"nav"}
                classes={"collapsed"}
                menus={menus}
                hover={false}
            >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Nav>

            <main className={css.index}>
                <h1 className={css.title}>{title}</h1>
                <p>
                    <A href={`#per-year`}>The first {menus[0].sections.length} plots below</A> come from <A title={"NJ State Police fatal crash data"} href={NjspFatalAcc}>NJ State Police fatal crash data</A> (2008-present). {"It's generally current to the previous day."}
                </p>
                <p>
                    <A href={"#njdot"}>Below that</A> are plots of <A title={"NJ DOT raw crash data"} href={NjdotRawData}>NJ DOT raw crash data</A>, which includes 6MM property-damage, injury, and fatal crashes from 2001-2021. {`It's a richer dataset, but less up to date.`}
                </p>
                <p>
                    <span className={css.bold}>Work in progress</span> map of NJDOT data: 5 years (2017-2021) of fatal
                    and injury crashes in Hudson County:
                </p>
                <iframe src={`${basePath}/map/hudson`} className={css.map} />
                <ul style={{listStyle: "none"}}>
                    <li><A href={"/map/hudson"}>Full screen map here</A></li>
                    <li>Code and cleaned data are <A href={GitHub.href}>here on GitHub</A>.</li>
                </ul>
                <div key={njspPlotSpec.id} className={css["plot-container"]}>
                    <NjspPlot
                        {...njspProps}
                        county={county}
                        setCounty={setCounty}
                    />
                    <hr/>
                </div>
                {
                    plots.map(
                        ({id, ...rest}, idx) =>
                            <Fragment key={id}>
                                {
                                    idx + 1 == menus[0].sections.length && <>
                                        <h1 id={"njdot"}><a href={`#njdot`}>NJ DOT Raw Crash Data</a></h1>
                                        <p>
                                            NJ DOT <A title={"NJ DOT raw crash data"}
                                                      href={"https://www.state.nj.us/transportation/refdata/accident/rawdata01-current.shtm"}>publishes
                                            raw crash data</A>, including property-damage, injury, and fatal crashes, going
                                            back to 2001 (≈6MM records).
                                        </p>
                                        <p>{"The data currently ends in 2021, after a drop in all types of crashes due to COVID, and mid-way through a spike in fatal crashes in 2021-2022 (based on the NJSP data above). 2022 data should land in early 2024."}</p>
                                    </>
                                }
                                <div key={id} className={css["plot-container"]}>
                                    <Plot
                                        id={id}
                                        basePath={basePath}
                                        {...rest}
                                        margin={{ b: 30, }}
                                    />
                                    <hr/>
                                </div>
                            </Fragment>
                    )
                }
                <Footer />
            </main>
        </div>
    )
}

export default Home
