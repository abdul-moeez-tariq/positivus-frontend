// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";

// import TeamHero from "../components/teamPage/TeamHero";
// import TeamStats from "../components/teamPage/TeamStats";
// import TeamMemberCard from "../components/teamPage/TeamMemberCard";
// import TeamCTA from "../components/teamPage/TeamCTA";

// import teamData from "../components/team/teamData";

// function TeamPage() {
//   return (
//     <>
//       <Header />

//       <main className="bg-white">
//         <TeamHero />

//         <section className="py-16 sm:py-20 lg:py-24">
//           <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//             <TeamStats />

//             <div
//               id="team-members"
//               className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3"
//             >
//               {teamData.map((member) => (
//                 <TeamMemberCard key={member.id} member={member} />
//               ))}
//             </div>
//           </div>
//         </section>

//         <TeamCTA />
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default TeamPage;

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

import TeamHero from "../components/teamPage/TeamHero";
import TeamStats from "../components/teamPage/TeamStats";
import TeamMemberCard from "../components/teamPage/TeamMemberCard";
import TeamCTA from "../components/teamPage/TeamCTA";

import teamData from "../components/team/teamData";

function TeamPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <TeamHero />

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <TeamStats />

            <div
              id="team-members"
              className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3"
            >
              {teamData.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        <TeamCTA />
      </main>

      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />
    </>
  );
}

export default TeamPage;
