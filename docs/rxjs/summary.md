# Summary



* **Observable** - a stream of events to which observers can subscribe.
* **Observer** - an object with `next`, `error` and `complete` methods, which subscribes to an observable.
* **Subscription function** - the function which executes each time an observer subscribes to an observable.
* **Producer** - the source of data for an observable, the thing that calls an observers `next`, `error`, and `complete` methods.
* **Hot observable** - an observable which creates its producer.
* **Cold observable** - an observable which closes over its producer.
* **Finite observable** - an observable which completes.
* **Infinite observable** - an observable which never completes.
* **Unicast observable** - an observable whose emitted values **are not** shared amongst subscribers.
* **Multicast observable** - an observable whose emitted values **are** shared amongst subscribers.

