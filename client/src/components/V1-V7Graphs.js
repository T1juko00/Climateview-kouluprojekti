import React from "react";
import V2 from './charts/V2'
import V3 from './charts/V3'
import V5 from './charts/V5'
import V6 from './charts/V6'
import V7 from "./charts/V7";

export default function V1_V7Graphs() {
  return (
    <> 
    <div>
    {V2()}
    </div>
    <div>
      {V3()}
    </div>
    <div>
      {V5()}
    </div>
    <div>
      {V6()}
    </div>
    <div>
      {V7()}
    </div>
    </>
  )
}
