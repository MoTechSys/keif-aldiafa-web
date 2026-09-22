import type { CityLocalText } from "./types";
import makkah from "./makkah";
import riyadh from "./riyadh";
import madinah from "./madinah";
import dammam from "./dammam";
import taif from "./taif";
import abha from "./abha";
import jeddah from "./jeddah";
import yanbu from "./yanbu";

/**
 * نصوص (خدمة × مدينة) المكتوبة يدوياً (D160) — مفتاح المدينة كما في CITIES.
 * المدن الثماني كلها مكتوبة يدوياً (D160 → D162 جدة وينبع)؛ القالب القديم svcText بقي احتياطاً وللصفحات المدينية فقط.
 */
export const LOCAL_TEXT: Partial<Record<string, CityLocalText>> = { jeddah, makkah, riyadh, madinah, dammam, taif, abha, yanbu };
export type { CityLocalText, LocalSvcText } from "./types";
