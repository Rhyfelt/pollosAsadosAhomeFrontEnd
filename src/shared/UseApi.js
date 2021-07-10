import { useState, useMemo } from 'react'
const useApi = (apiFactory, initialState) => {
    let [ state, setState ] = useState(initialState);
    return useMemo(() => apiFactory ({ state, setState }),[
        state,
        setState,
        apiFactory
    ]);
}

export default useApi