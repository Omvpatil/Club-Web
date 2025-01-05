import React from "react";

const Members = () => {
  const rightMembers = [
    { name: "Name 1", position: "Position 1" },
    { name: "Name 2", position: "Position 2" },
    { name: "Name 3", position: "Position 3" },
    { name: "Name 4", position: "Position 4" },
    { name: "Name 5", position: "Position 5" },
    { name: "Name 6", position: "Position 6" },
  ];

  return (
    <div className="flex gap-8  text-white p-8 min-h-screen">
      {/* Left Section */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold uppercase p-4">Our Leaders</h1>
        <div className="border-t border-white pt-4 mt-4">
          <h2 className="text-2xl font-semibold mb-4 p-3">Core Members</h2>
          <div className="grid grid-cols-2 gap-4 m-5 mt-8">
            {/* Core Member 1 */}
            <div className=" p-4 rounded-lg shadow-lg">
              <div className="h-40 bg-gray-700 rounded-lg"></div>
              <h3 className="text-lg font-bold mt-4">RIDDHI</h3>
              <p className="text-sm text-gray-400">President</p>
            </div>

            {/* Core Member 2 */}
            <div className="p-4 rounded-lg shadow-lg">
              <div className="h-40 bg-gray-700 rounded-lg"></div>
              <h3 className="text-lg font-bold mt-4">ASHISH</h3>
              <p className="text-sm text-gray-400">Vice-President</p>
            </div>

            {/* Core Member 3 */}
            <div className="p-4 rounded-lg shadow-lg">
              <div className="h-40 bg-gray-700 rounded-lg"></div>
              <h3 className="text-lg font-bold mt-4">VIDHEE</h3>
              <p className="text-sm text-gray-400">Secretary</p>
            </div>

            {/* Core Member 4 */}
            <div className="p-4 rounded-lg shadow-lg">
              <div className="h-40 bg-gray-700 rounded-lg"></div>
              <h3 className="text-lg font-bold mt-4">UDAY</h3>
              <p className="text-sm text-gray-400">Treasurer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 backdrop-blur-3xl border border-gray-700 p-4 rounded-lg shadow-lg overflow-y-auto h-[80vh] mt-20">
        <div className="grid grid-cols-2 gap-4">
          {rightMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 rounded-lg"
            >
              <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;