// Vai salvar valor anterior de um state para utilizar em um outro local
import {useEffect, useRef, useDebugValue} from 'react'

export const usePrevious = (value) => {
    const ref = useRef;

    useDebugValue(" --- CUSTOM HOOK E USEDEBUGVALUE ---");
    useDebugValue("O número anterior é: " + ref.current);

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};