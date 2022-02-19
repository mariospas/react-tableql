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
export declare const Basic: () => JSX.Element
export declare const DebugMode: () => JSX.Element
export declare const PageLimit: () => JSX.Element
export declare const PageNeighbors: () => JSX.Element
export declare const CurrentPage: () => JSX.Element
export declare const OnPageChanged: () => JSX.Element
export declare const CustomStyles: () => JSX.Element
export declare const Sort: () => JSX.Element
