# Actions

There are a few rules to writing good actions within your application.

* Upfront - write actions before developing features to understand and gain a shared knowledge of the feature being implemented.
* Divide - categorize actions based on the event source.
* Many - actions are inexpensive to write, so the more actions you write, the better you express flows in your application.
* Event-Driven - capture _events_ **not** _commands_ as you are separating the description of an event and the handling of that event.
* Descriptive - provide context that are targeted to a unique event with more detailed information you can use to aid in debugging with the developer tools.

## CreateAction\(\)

The [`createAction`](https://ngrx.io/api/store/createAction) function returns a function, that when called returns an object in the shape of the [`Action`](https://ngrx.io/api/store/Action) interface. The [`props`](https://ngrx.io/api/store/props) method is used to define any additional metadata needed for the handling of the action. Action creators provide a consistent, type-safe way to construct an action that is being dispatched.

