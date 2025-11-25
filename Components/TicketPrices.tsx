"use client";

export default function TicketPrices() {
  return (
    <section className="w-full flex flex-col items-center pt-10 pb-20 px-4 lg:px-10">

      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-extrabold text-black text-center leading-tight">
        TICKET <br />
        <span className="text-orange-500">Prices</span>
      </h2>

      {/* underline */}
      <div className="w-24 h-[5px] bg-[#1c1c2b] rounded-full mt-3"></div>


      {/* ================= DESKTOP 2-COLUMN GRID ================= */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">

        {/* ===== PRICE CARD 1 ===== */}
        <div className="w-full bg-white rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.2)] p-8">
          
          <div className="flex justify-center mb-6">
            <div className="bg-orange-500 text-white px-8 py-2 rounded-full font-semibold text-lg">
              TRAMPOLINE ARENA
            </div>
          </div>

          <table className="w-full text-center">
            <thead>
              <tr className="text-gray-800 font-semibold text-lg">
                <th className="pb-3">DURATION</th>
                <th className="pb-3">WEEKDAYS</th>
                <th className="pb-3">WEEKENDS</th>
              </tr>
            </thead>

            <tbody className="text-gray-900 font-medium text-lg">
              <tr className="border-t">
                <td className="py-4">30 MIN</td>
                <td>390</td>
                <td>490</td>
              </tr>

              <tr className="border-t">
                <td className="py-4">60 MIN</td>
                <td>590</td>
                <td>690</td>
              </tr>

              <tr className="border-t">
                <td className="py-4">90 MIN</td>
                <td>790</td>
                <td>890</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ===== PRICE CARD 2 ===== */}
        <div className="w-full bg-white rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.2)] p-8">
          
          <div className="flex justify-center mb-6">
            <div className="bg-orange-500 text-white px-8 py-2 rounded-full font-semibold text-lg">
              TRAMPOLINE ARENA
            </div>
          </div>

          <table className="w-full text-center">
            <thead>
              <tr className="text-gray-800 font-semibold text-lg">
                <th className="pb-3">DURATION</th>
                <th className="pb-3">WEEKDAYS</th>
                <th className="pb-3">WEEKENDS</th>
              </tr>
            </thead>

            <tbody className="text-gray-900 font-medium text-lg">
              <tr className="border-t">
                <td className="py-4">30 MIN</td>
                <td>390</td>
                <td>490</td>
              </tr>

              <tr className="border-t">
                <td className="py-4">60 MIN</td>
                <td>590</td>
                <td>690</td>
              </tr>

              <tr className="border-t">
                <td className="py-4">90 MIN</td>
                <td>790</td>
                <td>890</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      {/* ================= BUTTONS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">

        <button className="bg-[#1c1c2b] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-md">
          VIEW CALENDAR
        </button>

        <button className="bg-orange-500 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-md">
          FILL WAIVER
        </button>
      </div>


      {/* ================= INFO BOX (FULL WIDTH ON DESKTOP) ================= */}
      <div className="
        w-full max-w-4xl mt-14 p-7 rounded-xl 
        bg-gradient-to-r from-[#ffe1d2] to-[#ffeddc] 
        text-gray-800 shadow-lg border border-black/10
        text-center lg:text-left
      ">
        <p className="font-semibold text-orange-600 text-lg lg:text-xl">
          Grip Socks are a must for trampoline fun!
        </p>

        <p className="mt-3 text-base lg:text-lg">
          Bring yours or grab <span className="text-orange-600 font-semibold">SkyJumper Grip Socks</span> for just <strong>Rs 100/-</strong>
        </p>

        <p className="mt-5 text-base lg:text-lg">
          <strong>Note:</strong> Activity prices are inclusive of <strong>18% GST</strong>.
        </p>

        <p className="mt-2 text-sm italic text-gray-600">
          *Special days as defined in calendar*
        </p>
      </div>


    </section>
  );
}
