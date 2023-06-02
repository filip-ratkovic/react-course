// import React, { useState } from 'react'

// function Score() {
//   const [teams, setTeams] = useState()
//   const [teamName, setTeamName] = useState()

//   const newTeam = []
//   const addTeam = () => {
//     newTeam.push(...newTeam, teamName)
//     setTeams(newTeam)
//   }
//   console.log(teams)
//   return (
//     <main className="score-main">
//         <input type="text" onChange={((e) => {
//             setTeamName(e.target.value);
//         })} />
//         <button onClick={addTeam}></button>

//         {teams.map((team)=> {
//          return <h1>{team}</h1>
//         })}
//     </main>
//     )
// }

// export default Score