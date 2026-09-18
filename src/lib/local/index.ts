import type { CityLocalText } from "./types";
import makkah from "./makkah";
import riyadh from "./riyadh";
import madinah from "./madinah";
import dammam from "./dammam";
import taif from "./taif";
import abha from "./abha";

/**
 * نصوص (خدمة × مدينة) المكتوبة يدوياً (D160) — مفتاح المدينة كما في CITIES.
 * المدينة غير المدرجة هنا تعود إلى القالب القديم svcText (يُصفّى تدريجياً حتى تُغطّى الثماني).
 */
export const LOCAL_TEXT: Partial<Record<string, CityLocalText>> = { makkah, riyadh, madinah, dammam, taif, abha };
export type { CityLocalText, LocalSvcText } from "./types";
