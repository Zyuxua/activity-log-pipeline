console.log("Running integration tests...");
if (process.env.FAIL_INT === "1") {
  console.error("Integration tests failed (simulated).");
  process.exit(1);
}
console.log("Integration tests passed.");
process.exit(0);
