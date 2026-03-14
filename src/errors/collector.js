export function createErrorCollector() {
  const errors = [];
  const warnings = [];

  return {
    addError(message) {
      if (message) errors.push(String(message));
    },
    addWarning(message) {
      if (message) warnings.push(String(message));
    },
    hasErrors() {
      return errors.length > 0;
    },
    hasWarnings() {
      return warnings.length > 0;
    },
    getErrors() {
      return [...errors];
    },
    getWarnings() {
      return [...warnings];
    },
    printSummary(logger = console) {
      if (warnings.length) {
        logger.warn('\n========== 警告汇总 ==========');
        for (const warning of warnings) logger.warn(warning);
      }

      if (errors.length) {
        logger.error('\n========== 错误汇总 ==========');
        for (const error of errors) logger.error(error);
      }
    },
  };
}
