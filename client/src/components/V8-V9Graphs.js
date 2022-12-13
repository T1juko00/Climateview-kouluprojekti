import React from 'react'
import V9 from './charts/V9'
import V8 from './charts/V8'

export default function V8_V9Graphs() {
  return (
    <>
    <div>
      {V8()}
    </div>
    <div>
      {V9()}
    </div>
    </>
  )
}
