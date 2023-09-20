import React from 'react';

function CaseInfo(p) {
  return (
    <div className="{'caseinfo'+'p'}">

        {/* Billing Information */}
        <section>
          <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1"><span className='underline'>Sri Krishna</span> VS <span className='underline'>Mahendra Singh ans ORS</span></h3>
          <ul>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div className="text-sm text-slate-800 font-medium">Case No.</div>
              {/* Right */}
              <div className="text-sm text-slate-800ml-4">
                <span className="mr-3">C.R.P.-5/2023</span>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div className="text-sm text-slate-800 font-medium">Status</div>
              {/* Right */}
              <div className="text-sm text-slate-800ml-4">
                <span className="mr-3">DISPOSED</span>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div className="text-sm text-slate-800 font-medium">Date of Filing </div>
              {/* Right */}
              <div className="text-sm text-slate-800ml-4">
                <span className="mr-3">11-may-2005</span>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div className="text-sm text-slate-800 font-medium">Date of Registration</div>
              {/* Right */}
              <div className="text-sm text-slate-800ml-4">
                <span className="mr-3">11-may-2005</span>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div className="text-sm text-slate-800 font-medium">Date of Disposal</div>
              {/* Right */}
              <div className="text-sm text-slate-800ml-4">
                <span className="mr-3">23-jan-2015</span>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div className="text-sm text-slate-800 font-medium">Dealing Assistant</div>
              {/* Right */}
              <div className="text-sm text-slate-800ml-4">
                <span className="mr-3">ORG-DA6</span>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div className="text-sm text-slate-800 font-medium">Filing Advocate</div>
              {/* Right */}
              <div className="text-sm text-slate-800ml-4">
                <span className="mr-3">AGARWAL LAW ASSOCIATES</span>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div className="text-sm text-slate-800 font-medium">Subject 1</div>
              {/* Right */}
              <div className="text-sm text-slate-800ml-4">
                <span className="mr-3">OTHER MATTERS RELATING TO SPECIFIC PERFORMANCE</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Invoices */}
        <section className='md:py-10'>
          <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">Filing Details</h3>
          {/* Table */}
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400">
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap">
                <th colSpan={2} className="w-full block md:w-auto md:table-cell py-2">
                  <div className="font-semibold text-left">Date</div>
                </th>
                <th className="w-full hidden md:w-auto md:table-cell py-2">
                  <div className="font-semibold text-left">Filing Details</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm">
              {/* Row */}
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap border-b border-slate-200 py-2 md:py-0">
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium text-slate-800">07-08-2023</div>
                </td>
                <td></td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left">Filed by RAHUL SHARMA On Behalf of SRI KISHAN Vide Diary No : 1370009/2023</div>
                </td>
              </tr>
              {/* Row */}
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap border-b border-slate-200 py-2 md:py-0">
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium text-slate-800">20-07-2023</div>
                </td>
                <td></td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left">Process Fee (Rs.2) Filed By RAHUL SHARMA    Vide Diary No : 1229601/2023</div>
                </td>
              </tr>
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap border-b border-slate-200 py-2 md:py-0">
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium text-slate-800">11-07-2023</div>
                </td>
                <td></td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left">Process Fee (Rs.5) Filed By RAHUL SHARMA    Vide Diary No : 1152901/2023</div>
                </td>
              </tr>
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap border-b border-slate-200 py-2 md:py-0">
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium text-slate-800">04-05-2023</div>
                </td>
                <td></td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left">Process Fee (Rs.10) Filed By RAHUL SHARMA    Vide Diary No : 773188/2023</div>
                </td>
              </tr>
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap border-b border-slate-200 py-2 md:py-0">
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium text-slate-800">22-03-2023</div>
                </td>
                <td></td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left">Filed by RAHUL SHARMA On Behalf of SRI KISHAN Vide Diary No : 526761/2023</div>
                </td>
              </tr>
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap border-b border-slate-200 py-2 md:py-0">
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium text-slate-800">16-03-2023</div>
                </td>
                <td></td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left">Process Fee (Rs.12) Filed By CHINMAYA KUMAR BHATT    Vide Diary No : 485924/2023</div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

    </div>
  );
}

export default CaseInfo;