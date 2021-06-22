import { useHistory } from 'react-router-dom'

export const useLocation = () => {
    let history = useHistory()
    const { go, goBack, replace, push, location, goForward } = history
    return { go, goBack, replace, push, location, goForward }
}
