# 🗣Subject

> _The messenger of Rx, you tell me, I'll tell them..._

A Subject is like an Observable, but can multicast to many Observers.

Subjects are like EventEmitters: they maintain a registry of many listeners.



An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers. While plain Observables are unicast \(each subscribed Observer owns an independent execution of the Observable\), Subjects are multicast.

**Every Subject is an Observer.** It is an object with the methods `next(v)`, `error(e)`, and `complete()`. To feed a new value to the Subject, just call `next(theValue)`, and it will be multicasted to the Observers registered to listen to the Subject.

