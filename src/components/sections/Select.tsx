import {useState} from 'react'
import {Text} from '../kit'
import {Popover} from '../primitives/popover'

export const SelectModule = () => {
  const [openPopover, setOpenPopover] = useState(false)

  return (
    <>
      <Popover
        content={
          <div>
            <Text>One</Text>
            <Text>Two</Text>
          </div>
        }
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}>
        <button onClick={() => setOpenPopover(!openPopover)} className="">
          Popover
        </button>
      </Popover>
    </>
  )
}
