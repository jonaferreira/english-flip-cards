
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Card from './Card'

describe('Card', (): void => {
    it('should render component', ():void=>{
        render(<Card/>)
    })
})