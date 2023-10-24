module.exports = {
  '*.{ts,tsx}': (filenames) => ['pnpm format:write', 'pnpm validate'],
}
