import { County, normalize } from "@/src/county";
import A from "@rdub/next-base/a";

export default function CityLink({ cc, mc, cc2mc2mn, }: {
    cc: number
    mc: number
    cc2mc2mn: { [cc: number]: County }
}) {
    const county = cc2mc2mn[cc]
    const { cn, mc2mn } = county
    // console.log(`cc ${cc} cn ${cn} mc ${mc} _county`, _county)
    const mn = mc2mn[mc]
    const city = normalize(mn)
    return <A href={`/c/${normalize(cn)}/${city}`}>{mn}</A>
}
