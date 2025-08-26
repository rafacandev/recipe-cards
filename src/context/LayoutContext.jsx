import { createContext, createSignal, useContext } from "solid-js"

/**
 * @typedef {Object} LayoutContextValue
 * @property {() => "default" | "print"} layout - Get the layout value.
 * @property {() => void} setDefaultLayout - Sets the layout to default.
 * @property {() => void} setPrintLayout - Sets the layout to print.
 */
export const LayoutContext = createContext()

/**
 * @description Hook to use the layout context.
 * @returns {LayoutContextValue}
 */
export const useLayout = () => useContext(LayoutContext)

export const LayoutProvider = props => {
  const [layout, setLayout] = createSignal("default")

  /** @type {LayoutContextValue} */
  const store = {
    layout,
    setDefaultLayout: () => setLayout("default"),
    setPrintLayout: () => setLayout("print"),
  }

  return <LayoutContext.Provider value={store}>{props.children}</LayoutContext.Provider>
}
