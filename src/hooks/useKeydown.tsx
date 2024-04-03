// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useEffect, useLayoutEffect, useState } from "react"

export const useKeydown = () : string => {

	const [keydown, setKeydown] = useState('');

	useLayoutEffect(() => {
		setKeydown("");
	}, [keydown])
	
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			setKeydown(e.key);
		}
	
		const handleKeyUp = () => {
			setKeydown("");
		}

		window.addEventListener('keydown', handleKeyDown)
		window.addEventListener('keyup', handleKeyUp)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
			window.removeEventListener('keyup', handleKeyUp)
		}
	}, [])

	return keydown
}