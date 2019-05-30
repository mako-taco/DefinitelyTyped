import { Extent } from 'ol/extent';
import And from 'ol/format/filter/And';
import Bbox from 'ol/format/filter/Bbox';
import Contains from 'ol/format/filter/Contains';
import During from 'ol/format/filter/During';
import EqualTo from 'ol/format/filter/EqualTo';
import Filter from 'ol/format/filter/Filter';
import GreaterThan from 'ol/format/filter/GreaterThan';
import GreaterThanOrEqualTo from 'ol/format/filter/GreaterThanOrEqualTo';
import Intersects from 'ol/format/filter/Intersects';
import IsBetween from 'ol/format/filter/IsBetween';
import IsLike from 'ol/format/filter/IsLike';
import IsNull from 'ol/format/filter/IsNull';
import LessThan from 'ol/format/filter/LessThan';
import LessThanOrEqualTo from 'ol/format/filter/LessThanOrEqualTo';
import Not from 'ol/format/filter/Not';
import NotEqualTo from 'ol/format/filter/NotEqualTo';
import Or from 'ol/format/filter/Or';
import Within from 'ol/format/filter/Within';
import Geometry from 'ol/geom/Geometry';
export function and(...conditions: Filter[]): And;
export function bbox(geometryName: string, extent: Extent, opt_srsName?: string): Bbox;
export function between(propertyName: string, lowerBoundary: number, upperBoundary: number): IsBetween;
export function contains(geometryName: string, geometry: Geometry, opt_srsName?: string): Contains;
export function during(propertyName: string, begin: string, end: string): During;
export function equalTo(propertyName: string, expression: string | number, opt_matchCase?: boolean): EqualTo;
export function greaterThan(propertyName: string, expression: number): GreaterThan;
export function greaterThanOrEqualTo(propertyName: string, expression: number): GreaterThanOrEqualTo;
export function intersects(geometryName: string, geometry: Geometry, opt_srsName?: string): Intersects;
export function isNull(propertyName: string): IsNull;
export function lessThan(propertyName: string, expression: number): LessThan;
export function lessThanOrEqualTo(propertyName: string, expression: number): LessThanOrEqualTo;
export function like(propertyName: string, pattern: string, opt_wildCard?: string, opt_singleChar?: string, opt_escapeChar?: string, opt_matchCase?: boolean): IsLike;
export function not(condition: Filter): Not;
export function notEqualTo(propertyName: string, expression: string | number, opt_matchCase?: boolean): NotEqualTo;
export function or(...conditions: Filter[]): Or;
export function within(geometryName: string, geometry: Geometry, opt_srsName?: string): Within;