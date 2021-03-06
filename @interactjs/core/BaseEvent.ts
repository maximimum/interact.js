export class BaseEvent<T extends Interact.ActionName = any> {
  type: string
  target: EventTarget
  currentTarget: EventTarget
  interactable: Interact.Interactable
  _interaction: Interact.Interaction<T>
  timeStamp: any
  immediatePropagationStopped = false
  propagationStopped = false

  get interaction (): Interact.InteractionProxy<T> {
    return this._interaction._proxy
  }

  constructor (interaction: Interact.Interaction) {
    this._interaction = interaction
  }

  preventDefault () {}

  /**
   * Don't call any other listeners (even on the current target)
   */
  stopPropagation () {
    this.propagationStopped = true
  }

  /**
   * Don't call listeners on the remaining targets
   */
  stopImmediatePropagation () {
    this.immediatePropagationStopped = this.propagationStopped = true
  }
}

export default BaseEvent
