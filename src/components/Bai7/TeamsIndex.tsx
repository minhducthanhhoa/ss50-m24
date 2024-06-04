import React from 'react'
import { Link } from 'react-router-dom';

export default function TeamsIndex() {
    const teams = [
        { id: 1, name: 'Team A' },
        { id: 2, name: 'Team B' },
      ];
  return (
    <div>
        <div className="p-4">
            <h2>Teams Index</h2>
            <ul>
                {teams.map((team) => (
                <li key={team.id}>
                    <Link to={`/teams/${team.id}`}>{team.name}</Link>
                </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
