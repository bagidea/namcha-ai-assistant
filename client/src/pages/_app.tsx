import { Provider } from "@/components/ui/provider"
import { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => (
    <Provider>
        <Component { ...pageProps } />
    </Provider>
)

export default App