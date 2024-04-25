import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(app)';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<EnsureDefined<import('../$types.js').LayoutData>, keyof LayoutData> & EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/(app)" | "/(app)/bulk-order-inquiry" | "/(app)/cart" | "/(app)/categories" | "/(app)/category/[slug]" | "/(app)/checkout/address" | "/(app)/checkout/payment-options" | "/(app)/mobile-cover" | "/(app)/mobile-cover/[slug]" | "/(app)/payment/failed" | "/(app)/payment/process" | "/(app)/payment/process-cf" | "/(app)/payment/success" | "/(app)/shop/[slug]" | "/(app)/store/[slug]"
type LayoutParams = RouteParams & { slug?: string }
type LayoutParentData = EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData, RouteId>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Omit<PageParentData, keyof Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../../node_modules/@sveltejs/kit/src/routes/(app)/+page.js').load>>>> & OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../../node_modules/@sveltejs/kit/src/routes/(app)/+page.js').load>>>>>>;
export type LayoutServerData = null;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../../node_modules/@sveltejs/kit/src/routes/(app)/+layout.js').load>>>> & OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../../node_modules/@sveltejs/kit/src/routes/(app)/+layout.js').load>>>>>>;