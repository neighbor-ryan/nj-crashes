import { keys, mapEntries } from "@rdub/base/objs";
import { loadSync } from "@rdub/base/load";
import { CC2MC2MN, normalize } from "@/src/county";
import { CC2MC2MN_RELPATH } from "@/server/paths";
import { Arr } from "@rdub/base/arr";

export const cc2mc2mn = loadSync<CC2MC2MN>(CC2MC2MN_RELPATH)
export const County2Code: Record<string, number> = mapEntries(cc2mc2mn, (cc, { cn }) => [ normalize(cn), cc ])
export const cn2cc: Record<string, number> = mapEntries(cc2mc2mn, (cc, { cn }) => [ cn, cc ])
export const Counties = Arr(keys(cn2cc))
