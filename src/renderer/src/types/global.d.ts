export {}
declare global {
  export interface Window {
    /** Message instance */
    $message?: import('naive-ui').MessageProviderInst
  }
}
