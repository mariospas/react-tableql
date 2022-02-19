import React from 'react'
import './customStyles.css'
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
export declare const Table: () => JSX.Element
export declare const Thead: () => JSX.Element
export declare const TrInThead: () => JSX.Element
export declare const ThInThead: () => JSX.Element
export declare const Tbody: () => JSX.Element
export declare const TrInTbody: () => JSX.Element
export declare const TdInTbody: () => JSX.Element
