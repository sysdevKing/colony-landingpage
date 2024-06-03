import React from 'react';

const winners = {
  name: "John Doe",
  image: "https://via.placeholder.com/150?text=Winner"
};

const waitingList = {
  name: "Jane Smith",
  image: "https://via.placeholder.com/150?text=Waiting"
};

const inProgress = {
  name: "Mike Johnson",
  image: "https://via.placeholder.com/150?text=In+Progress"
};

const upcoming = {
  name: "Alice Brown",
  image: "https://via.placeholder.com/150?text=Upcoming"
};

const Leaderboard = () => {
  return (
    <div className="max-w-5xl mx-auto pt-36 pb-20">
      {/* Winner Section */}
      <section className="mb-12">
        <div className="bg-[#2563EB] bg-opacity-65 text-white p-4 rounded-lg text-center">
          <h2 className="text-3xl font-bold">Congratulations to Our Winner!</h2>
          <img src={winners.image} alt={winners.name} className="mx-auto mt-4 rounded-full w-32 h-32 object-cover" />
          <p className="mt-4 text-xl">{winners.name}</p>
        </div>
      </section>

      {/* Waiting List, In Progress, Upcoming Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-200 p-6 rounded-lg text-center">
          <img src={waitingList.image} alt={waitingList.name} className="mx-auto rounded-full w-24 h-24 object-cover" />
          <h3 className="mt-4 text-xl font-bold">Waiting List</h3>
          <p className="mt-2">{waitingList.name}</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg text-center">
          <img src={inProgress.image} alt={inProgress.name} className="mx-auto rounded-full w-24 h-24 object-cover" />
          <h3 className="mt-4 text-xl font-bold">In Progress</h3>
          <p className="mt-2">{inProgress.name}</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg text-center">
          <img src={upcoming.image} alt={upcoming.name} className="mx-auto rounded-full w-24 h-24 object-cover" />
          <h3 className="mt-4 text-xl font-bold">Upcoming</h3>
          <p className="mt-2">{upcoming.name}</p>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
