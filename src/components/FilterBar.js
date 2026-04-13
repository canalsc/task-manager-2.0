/**
 * FilterBar (components/FilterBar.js)
 * Purpose  : Renders three filter toggle buttons (All / Active / Done).
 *            Purely presentational — it renders UI based on props and fires
 *            a callback when the user picks a new filter. It owns no state.
 * Type     : Client Component — needs onClick handlers.
 * Props    :
 *   filter         {string}   — the currently active filter ('all'|'active'|'done'),
 *                               controlled by TaskBoard.
 *   onFilterChange {Function} — callback to update filter state in TaskBoard.
 *                               State lives in TaskBoard because `filter` also
 *                               affects which tasks are passed to TaskList.
 */

'use client';

// The three filter options with display labels and keyboard shortcuts
const FILTERS = [
  { key: 'all',    label: 'ALL',    shortcut: 'a' },
  { key: 'active', label: 'ACTIVE', shortcut: 'i' },
  { key: 'done',   label: 'DONE',   shortcut: 'd' },
];

export default function FilterBar({ filter, onFilterChange }) {
  return (
    <div className="flex items-center gap-1 mb-1">
      <span className="text-xs text-terminal-dim mr-2 tracking-wider">FILTER:</span>

      {FILTERS.map(({ key, label, shortcut }) => {
        /**
         * DERIVED (per button): isActive
         * Whether this button represents the currently selected filter.
         * Computed inline from props — not state — so it always reflects
         * the truth without any synchronization logic.
         */
        const isActive = filter === key;

        return (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`
              text-xs px-3 py-1 rounded tracking-wider transition-all duration-150
              ${isActive
                /* CONDITIONAL STYLE: active filter gets neon green highlight + glow */
                ? 'bg-terminal-greenDim text-terminal-green border border-terminal-green glow-border'
                /* Inactive filters are muted and bordered */
                : 'text-terminal-dim border border-terminal-muted hover:border-terminal-dim hover:text-terminal-text'
              }
            `}
          >
            {/* CONDITIONAL RENDER: show bracket shortcut hint on active button */}
            {isActive ? `[${label}]` : label}
          </button>
        );
      })}
    </div>
  );
}
