import React from 'react';
import './style.css'

const winners = {
  name: "Colony XYZ",
  image: "https://via.placeholder.com/150?text=Winner"
};

const waitingList = {
  name: "War ends X date Y time",
  image: "https://via.placeholder.com/150?text=Waiting"
};

const inProgress = {
  name: "Open until X date Y time",
  image: "https://via.placeholder.com/150?text=In+Progress"
};

const upcoming = {
  name: "Open until X date Y time",
  image: "https://via.placeholder.com/150?text=Upcoming"
};

const Leaderboard = () => {
  return (
    <div className="max-w-5xl mx-auto pt-32 pb-36" id="leaderboard">
      {/* Winner Section */}
      <section className="mb-12">
        <div className="bg-blue-900 bg-opacity-75 text-white p-4 rounded-lg text-center shadow-lg neon-border flex items-center justify-between">
          <img src={winners.image} alt={winners.name} className="rounded-full w-20 h-20 object-cover shadow-md mr-4" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold neon-text">Congratulations to Our Winner!</h2>
            <p className="mt-2 text-lg">{winners.name}</p>
          </div>
        </div>
      </section>

      {/* Waiting List, In Progress, Upcoming Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 text-white p-6 rounded-lg text-center shadow-lg neon-border">
          <img src={waitingList.image} alt={waitingList.name} className="mx-auto rounded-full w-24 h-24 object-cover shadow-md" />
          <h3 className="mt-4 text-xl font-bold neon-text">WAR ONGOING</h3>
          <p className="mt-2">{waitingList.name}</p>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded-lg text-center shadow-lg neon-border">
          <img src={inProgress.image} alt={inProgress.name} className="mx-auto rounded-full w-24 h-24 object-cover shadow-md" />
          <h3 className="mt-4 text-xl font-bold neon-text">OPEN TO COLONIZERS</h3>
          <p className="mt-2">{inProgress.name}</p>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded-lg text-center shadow-lg neon-border">
          <img src={upcoming.image} alt={upcoming.name} className="mx-auto rounded-full w-24 h-24 object-cover shadow-md" />
          <h3 className="mt-4 text-xl font-bold neon-text">UNDER SURVEILLANCE</h3>
          <p className="mt-2">{upcoming.name}</p>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;

