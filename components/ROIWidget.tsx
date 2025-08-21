'use client';
import { useMemo, useState } from 'react';

const PRICE = 9.99;  // RSP
const COST  = 4.25;  // pack cost
const DAYS  = 30;    // open days/month

const PRESETS = [
  { key: 'office', label: 'Office', meals: 60 },
  { key: 'event',  label: 'Event',  meals: 250 },
  { key: 'pub',    label: 'Pub',    meals: 80 },
  { key: 'hotel',  label: 'Hotel',  meals: 120 },
] as const;

function gbp(n: number) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 })
    .format(Math.round(n));
}

export default function ROIWidget() {
  const [active, setActive] = useState<(typeof PRESETS)[number]['key']>('office');
  const [mealsPerDay, setMealsPerDay] = useState<number>(PRESETS.find(p => p.key === 'office')!.meals);

  function choosePreset(k: (typeof PRESETS)[number]['key']) {
    const p = PRESETS.find(x => x.key === k)!;
    setActive(k);
    setMealsPerDay(p.meals);
  }

  const monthlyMeals   = useMemo(() => mealsPerDay * DAYS, [mealsPerDay]);
  const monthlyRevenue = useMemo(() => monthlyMeals * PRICE, [monthlyMeals]);
  const monthlyCOGS    = useMemo(() => monthlyMeals * COST, [monthlyMeals]);
  const monthlyGross   = useMemo(() => monthlyRevenue - monthlyCOGS, [monthlyRevenue, monthlyCOGS]);

  return (
    <div>
      {/* Preset buttons */}
      <div className="flex flex-wrap gap-2 items-center justify-center md:justify-end">
        {PRESETS.map(p => {
          const isActive = p.key === active;
          return (
            <button
              key={p.key}
              type="button"
              onClick={() => choosePreset(p.key)}
              className={[
                'rounded-full border px-3 py-1.5 text-sm transition',
                isActive ? 'bg-amber-600 text-white border-amber-600 shadow-sm' : 'bg-white text-gray-700 hover:bg-gray-50'
              ].join(' ')}
              aria-pressed={isActive}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      {/* Slider */}
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-700">Average meals per day</div>
          <div className="text-sm text-gray-700">
            <span className="inline-flex items-center rounded-full border px-2 py-1">
              {mealsPerDay} meals/day
            </span>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-3">
          <input
            type="range"
            min={0}
            max={400}
            step={5}
            value={mealsPerDay}
            onChange={(e) => setMealsPerDay(parseInt(e.target.value || '0', 10))}
            className="w-full"
            aria-label="Average meals per day"
          />
          <input
            type="number"
            min={0}
            max={400}
            step={5}
            value={mealsPerDay}
            onChange={(e) => {
              const v = parseInt(e.target.value || '0', 10);
              if (Number.isFinite(v)) setMealsPerDay(Math.max(0, Math.min(400, v)));
            }}
            className="w-28 rounded-lg border px-3 py-2 text-center"
            aria-label="Meals per day (numeric input)"
          />
        </div>
        <p className="mt-2 text-xs text-gray-500 text-center">
          * Assumes £9.99 selling price, £4.25 pack cost, 30 days open.
        </p>
      </div>

      {/* Metrics */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
          <div className="text-xs uppercase tracking-wide text-gray-500">Monthly revenue</div>
          <div className="mt-1 text-2xl md:text-3xl font-semibold">{gbp(monthlyRevenue)}</div>
        </div>
        <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
          <div className="text-xs uppercase tracking-wide text-gray-500">Monthly gross profit</div>
          <div className="mt-1 text-2xl md:text-3xl font-semibold">{gbp(monthlyGross)}</div>
        </div>
      </div>
    </div>
  );
}
