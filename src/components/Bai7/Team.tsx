import React from 'react'
import { useParams } from 'react-router-dom';

export default function Team() {
    const { teamId } = useParams<{ teamId: string }>();
  return (
    <div>
        <div className="p-4">
            <h2>Team Details</h2>
            <p>Team ID: {teamId}</p>
        </div>
    </div>
  )
}
