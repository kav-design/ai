import { Clock, TrendingDown, AlertTriangle } from "lucide-react";

export default function SpeedToLead() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Stats visualization */}
          <div className="relative">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              {/* The problem */}
              <h3 className="mb-6 text-lg font-bold text-gray-900">
                What happens when you miss a call
              </h3>

              {/* Timeline */}
              <div className="relative flex flex-col gap-0">
                {/* Line */}
                <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-400 via-amber-400 to-rose-400" />

                <div className="relative flex items-start gap-4 pb-6">
                  <div className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 ring-4 ring-gray-50">
                    <Clock size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      0 - 5 minutes
                    </p>
                    <p className="text-sm text-gray-500">
                      Patient is still engaged and ready to book
                    </p>
                    <div className="mt-2 rounded-lg bg-emerald-50 px-3 py-1.5">
                      <p className="text-xs font-bold text-emerald-700">
                        Milo responds in 2 seconds
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start gap-4 pb-6">
                  <div className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 ring-4 ring-gray-50">
                    <TrendingDown size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      5 - 30 minutes
                    </p>
                    <p className="text-sm text-gray-500">
                      80% of leads are already lost. Patient has moved on or
                      called your competitor.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 ring-4 ring-gray-50">
                    <AlertTriangle size={18} className="text-rose-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      30+ minutes
                    </p>
                    <p className="text-sm text-gray-500">
                      Patient has booked elsewhere. Average value of a lost
                      dental patient: $2,500/year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-milo-600 uppercase">
              The speed-to-lead problem
            </p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Every minute costs you{" "}
              <span className="text-rose-500">$2,500</span>
            </h2>
            <p className="mb-6 text-lg text-gray-500 leading-relaxed">
              Australian dental clinics miss an average of 35% of incoming
              calls. Each missed call is a patient who needed you right now — and
              will call someone else if they don&apos;t hear back fast.
            </p>

            {/* Key numbers */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-100 bg-white p-4">
                <p className="text-3xl font-extrabold text-gray-900">35%</p>
                <p className="text-sm text-gray-500">
                  of calls missed by the average clinic
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-white p-4">
                <p className="text-3xl font-extrabold text-gray-900">$87K</p>
                <p className="text-sm text-gray-500">
                  lost revenue per year from missed calls
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-white p-4">
                <p className="text-3xl font-extrabold text-emerald-600">2s</p>
                <p className="text-sm text-gray-500">
                  Milo&apos;s average response time
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-white p-4">
                <p className="text-3xl font-extrabold text-emerald-600">91%</p>
                <p className="text-sm text-gray-500">
                  of patients respond to Milo&apos;s SMS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
