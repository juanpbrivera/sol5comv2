module.exports = {
  default: {
    requireModule: ['ts-node/register/transpile-only'],
    require: [
      'support/CustomWorld.ts',
      'support/hooks.ts',
      'Spect/*.ts'  // ← Cambiado de features/steps/ a Spect/
    ],
    format: ['progress'],
    parallel: 0
  }
};