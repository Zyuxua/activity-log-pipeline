// 強制模擬單元測試失敗（用於截圖/測試）
console.log("Running unit tests...");
console.error("Unit tests failed (simulated).");
process.exit(1); // 非 0 = 失敗
