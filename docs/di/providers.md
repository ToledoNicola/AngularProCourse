# Providers

```text
{
    provider: Token,
    useClass: NomeClasse,
    multi:true
}
```

`multi:true` : When true, injector returns an array of instances. This is useful to allow multiple providers spread across many files to provide configuration information to a common token.  If on the first registered **and** the new provider is set, the new directives are added to the previously registered directives instead of overriding.

