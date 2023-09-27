import ApplicationController from "./application_controller"

export default class extends ApplicationController {
  connect () {
    super.connect()
  }

  increment() {
    this.stimulate('Counter#increment', 1)
  }

  // beforeIncrement(element, reflex, noop, id) {
  //  console.log("before increment", element, reflex, id)
  // }

  // incrementQueued(element, reflex, noop, id) {
  //   console.log("increment enqueued for delivery upon connection", element, reflex, id)
  // }

  // incrementDelivered(element, reflex, noop, id) {
  //   console.log("increment delivered to the server", element, reflex, id)
  // }

  // incrementSuccess(element, reflex, noop, id) {
  //   console.log("increment successfully executed", element, reflex, id)
  // }

  // incrementError(element, reflex, error, id) {
  //   console.error("increment server-side error", element, reflex, error, id)
  // }

  // incrementHalted(element, reflex, noop, id) {
  //   console.warn("increment halted before execution", element, reflex, id)
  // }

  // incrementForbidden(element, reflex, noop, id) {
  //   console.warn("increment forbidden from executing", element, reflex, id)
  // }

  // afterIncrement(element, reflex, noop, id) {
  //   console.log("increment has been executed by the server", element, reflex, id)
  // }

  // finalizeIncrement(element, reflex, noop, id) {
  //   console.log("increment changes have been applied", element, reflex, id)
  // }
}
