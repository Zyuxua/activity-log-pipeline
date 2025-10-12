console.log("Running unit tests...");
if (process.env.FAIL_UNIT === "1") {
  console.error("Unit tests failed (simulated).");
  process.exit(1);
}
console.log("Unit tests passed.");
process.exit(0);
