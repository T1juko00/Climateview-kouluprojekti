import React from 'react'
import V2 from './charts/V2'
import V3 from './charts/V3'
import V5 from './charts/V5'
import V6 from './charts/V6'

export default function V1_V7Graphs() {
  return (
    <div>
      {V2()}
      {V3()}
      {V5()}
      {V6()}
    </div>
  )
}
