import { BLockchain } from "../boards/Blockchain"
import { Analysis } from "../boards/Analysis"
import { Environment } from "../boards/Environment"

export const Private = () => {
     return (
          <div>
               <BLockchain />
               <Analysis />
               <Environment />
          </div>
    )
}