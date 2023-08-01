import Shutter from "@shutter-network/shutter-crypto";
import * as Sentry from "@sentry/node";

console.log("before sentry");
Sentry.init();
console.log("after sentry / before shutter");
await Shutter.init();
console.log("after shutter");
