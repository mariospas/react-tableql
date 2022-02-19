import React from 'react'
declare const _default: {
  title: string
  component: React.FC<
    import('../ApolloTableQL').ComponentProps &
      Omit<
        import('@apollo/client').QueryHookOptions<
          any,
          import('@apollo/client').OperationVariables
        >,
        'query'
      >
  >
}
export default _default
export declare const Default: () => JSX.Element
export declare const DebugOn: () => JSX.Element
export declare const ClickRow: () => JSX.Element
export declare const Sort: () => JSX.Element
export declare const ErrorBoundary: () => JSX.Element
