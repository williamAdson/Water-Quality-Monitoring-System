import 'bootstrap/dist/css/bootstrap.min.css'
import { BLockchain } from "../boards/Blockchain"
import { Analysis } from "../boards/Analysis"
import { Environment } from "../boards/Environment"
import { Lifecycle } from "../boards/Lifecycle"
import { Transaction } from "../boards/Transaction"

export const Private = () => {
     return (
          <div>
               <Lifecycle />
          </div>
    )
}