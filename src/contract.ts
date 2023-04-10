import {
  ERC20Recovered as ERC20RecoveredEvent,
  ERC721Recovered as ERC721RecoveredEvent,
  ETHReceived as ETHReceivedEvent
} from "../generated/Contract/Contract"
import {
  ERC20Recovered,
  ERC721Recovered,
  ETHReceived
} from "../generated/schema"

export function handleERC20Recovered(event: ERC20RecoveredEvent): void {
  let entity = new ERC20Recovered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestedBy = event.params.requestedBy
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC721Recovered(event: ERC721RecoveredEvent): void {
  let entity = new ERC721Recovered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestedBy = event.params.requestedBy
  entity.token = event.params.token
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleETHReceived(event: ETHReceivedEvent): void {
  let entity = new ETHReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
