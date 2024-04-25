import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(app)" | "/(app)/auth/change-password" | "/(app)/auth/change-success" | "/(app)/auth/forgot-password" | "/(app)/auth/forgot-success" | "/(app)/auth/login" | "/(app)/auth/logout" | "/(app)/auth/otp-login" | "/(app)/auth/reset-password" | "/(app)/auth/signup" | "/(app)/auth/verification-success" | "/(app)/auth/verify" | "/(app)/bulk-order-inquiry" | "/(app)/cart" | "/(app)/categories" | "/(app)/category/[slug]" | "/(app)/checkout/address" | "/(app)/checkout/payment-options" | "/(app)/mobile-cover" | "/(app)/mobile-cover/[slug]" | "/(app)/my" | "/(app)/my/addresses" | "/(app)/my/orders" | "/(app)/my/orders/[id]" | "/(app)/my/profile" | "/(app)/my/reviews" | "/(app)/my/reviews/create" | "/(app)/my/wishlist" | "/(app)/my/wishlist/add/[pid]" | "/(app)/payment/failed" | "/(app)/payment/process" | "/(app)/payment/process-cf" | "/(app)/payment/success" | "/(app)/shop/[slug]" | "/(app)/store/[slug]" | "/(catalog)/reel" | "/(catalog)/search" | "/(catalog)/[slug]" | "/(marketing)/about-us" | "/(marketing)/blogs" | "/(marketing)/blogs/[slug]" | "/(marketing)/contact-us" | "/(marketing)/faqs" | "/(marketing)/p/[slug]" | "/(marketing)/payments-returns" | "/(marketing)/privacy-policy" | "/(marketing)/terms-conditions" | "/(product)/all-reviews/[slug]" | "/(product)/product/[slug]" | "/test2" | "/tests" | null
type LayoutParams = RouteParams & { slug?: string; id?: string; pid?: string }
type LayoutServerParentData = EnsureDefined<{}>;
type LayoutParentData = EnsureDefined<{}>;

export type LayoutServerLoad<OutputData extends Partial<App.PageData> & Record<string, any> | void = Partial<App.PageData> & Record<string, any> | void> = Kit.ServerLoad<LayoutParams, LayoutServerParentData, OutputData, LayoutRouteId>;
export type LayoutServerLoadEvent = Parameters<LayoutServerLoad>[0];
export type LayoutServerData = Expand<OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../node_modules/@sveltejs/kit/src/routes/+layout.server.js').load>>>>>>;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../node_modules/@sveltejs/kit/src/routes/+layout.js').load>>>> & OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../node_modules/@sveltejs/kit/src/routes/+layout.js').load>>>>>>;
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;