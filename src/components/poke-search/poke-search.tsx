import React, { FC } from "react"
import { useDispatch } from "react-redux"
import { filtersActions } from "../../store/filters"
import { Input } from "@rebass/forms"

const PokeSearch: FC = () => {
  const dispatch = useDispatch()
  return (
    <Input
      type="text"
      placeholder="Search for pokemon by name or type."
      onChange={e =>
        dispatch(filtersActions.setSearchTerm(e.currentTarget.value))
      }
    />
  )
}

export default PokeSearch
