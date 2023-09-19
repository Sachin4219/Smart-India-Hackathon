import React from 'react';

function ForumRightContent() {
  return (
    <div className="w-full hidden xl:block xl:w-72">
      <div className="lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar">
        <div className="md:py-8">
          {/* Blocks */}
          <div className="space-y-4">
            
            {/* Block 1 */}
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <div className="text-xs font-semibold text-slate-400 uppercase mb-4">Timeline</div>
              <ul>
                {/* Event 1 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">May 11, 2005</div>
                    <div className="text-sm mb-2">
                      <a className="font-medium text-slate-800" href="#0">
                        Non-profit group Common Cause files petition in Supereme Court.
                      </a>
                    </div>
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-1 -bottom-1 left-0.5 ml-px w-0.5 bg-slate-200" />
                    <div className="absolute top-1 left-0 ml- w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                </li>
                {/* Event 2 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">Jan 16, 2006</div>
                    <div className="text-sm mb-2">
                      <a className="font-medium text-slate-800" href="#0">
                        Supreme Court seeks opinion of Delhi Medical Council
                      </a>
                    </div>
                    </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-1 -bottom-1 left-0.5 ml-px w-0.5 bg-slate-200" />
                    <div className="absolute top-1 left-0 ml- w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                </li>
                {/* Event 3 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">April 28, 2006</div>
                    <div className="text-sm mb-2">
                      <a className="font-medium text-slate-800" href="#0">
                        Law Commission suggests a draft bill.
                      </a>
                    </div>
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-1 -bottom-1 left-0.5 ml-px w-0.5 bg-slate-200" />
                    <div className="absolute top-1 left-0 ml- w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                </li>
                {/* Event 4 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">March 7, 2011</div>
                    <div className="text-sm mb-2">
                      <a className="font-medium text-slate-800" href="#0">
                        Supreme Court on a plea on behalf of Aruna Shanbaugm allows passive euthanasia.
                      </a>
                    </div>
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-1 -bottom-1 left-0.5 ml-px w-0.5 bg-slate-200" />
                    <div className="absolute top-1 left-0 ml- w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <button className="btn-sm w-full bg-white border-slate-200 hover:border-slate-300 text-indigo-500 shadow-none">View All</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ForumRightContent;
