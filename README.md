# ClientOnly

React Component used to prevent hydration of client only elements.

```javascript
  import { ClientOnly, useClientOnly } from "@digioi/client-only";
  const SomeReactComponent = (props) => {
    ...
    return <ClientOnly>
      <div> hello world </div>
    </ClientOnly>
  }
  /// OR 
  const SomeReactComponent = (props) => {
    const isMounted = useClientOnly();
    ...
    return isMounted ? <div>Client Only Render</div> : <div>PlaceHolder until Mounted</div>
  }
```