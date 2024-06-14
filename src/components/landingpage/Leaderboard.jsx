import React from 'react';
import './Leaderboard.css';
import winnerBackground from '/public/images/Winner.png'; // Ensure this path is correct

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
    <div className="max-w-5xl mx-auto min-h-full pb-36" id="leaderboard">
      {/* Winner Section */}
      <section className="mb-12 relative rounded-lg shadow-lg">
        <div
          className="bg-cover bg-center rounded-lg p-4 text-white flex items-center justify-between neon-border"
          style={{ backgroundImage: `url(${winnerBackground})` }}
        >
          <img src={winners.image} alt={winners.name} className="rounded-full w-20 h-20 object-cover shadow-md mr-4" />
          <div className="flex-1 text-center">
            <h2 className="text-4xl font-bold">Congratulations to Our Winner!</h2>
            <p className="mt-2 text-2xl">{winners.name}</p>
          </div>
        </div>
      </section>

      {/* Waiting List, In Progress, Upcoming Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#344afb] bg-opacity-65 text-white p-6 rounded-lg text-center shadow-lg">
          <img src={waitingList.image} alt={waitingList.name} className="mx-auto rounded-full w-24 h-24 object-cover shadow-md" />
          <h3 className="mt-4 text-xl font-bold">WAR ONGOING</h3>
          <p className="mt-2">{waitingList.name}</p>
        </div>
        <div className="bg-[#344afb] bg-opacity-65 text-white p-6 rounded-lg text-center shadow-lg">
          <img src={inProgress.image} alt={inProgress.name} className="mx-auto rounded-full w-24 h-24 object-cover shadow-md" />
          <h3 className="mt-4 text-xl font-bold">OPEN TO COLONIZERS</h3>
          <p className="mt-2">{inProgress.name}</p>
        </div>
        <div className="bg-[#344afb] bg-opacity-65 text-white p-6 rounded-lg text-center shadow-lg">
          <img src={upcoming.image} alt={upcoming.name} className="mx-auto rounded-full w-24 h-24 object-cover shadow-md" />
          <h3 className="mt-4 text-xl font-bold">UNDER SURVEILLANCE</h3>
          <p className="mt-2">{upcoming.name}</p>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
