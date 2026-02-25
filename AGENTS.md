# AGENTS.md

## Cursor Cloud specific instructions

This is **MahirVibeCoding** — a Nuxt 4 + Vue 3 + TailwindCSS static landing page. No backend, database, or external services required.

### Key commands

See `package.json` scripts and `README.md` for standard commands. Summary:

- **Dev server**: `bun run dev` (serves at `http://localhost:3000`)
- **Build**: `bun run build`
- **Type check**: `npx nuxi typecheck`

### Notes

- The lockfile is `bun.lock` — use **Bun** as the package manager (`bun install`, `bun run dev`, etc.).
- Bun must be installed first: `curl -fsSL https://bun.sh/install | bash` then add `~/.bun/bin` to `PATH`.
- No ESLint config exists in this repo. Type checking via `npx nuxi typecheck` is the primary static analysis tool.
- No automated tests exist; manual browser testing is the primary validation method.
- `nuxt prepare` runs automatically via the `postinstall` script during `bun install`.
