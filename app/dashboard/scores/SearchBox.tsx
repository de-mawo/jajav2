import { ChangeEvent } from "react";
import { HiOutlineSearch } from "react-icons/hi";

type Props = {
    points?: {};
    onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void
  }

const SearchBox = ({onChangeSearch}: Props) => {
  return (
    <div className="pt-5 container ">
            <div className="search_component">
                <span>
                   <HiOutlineSearch/>
                </span>
                <input
                 className="form-control border-1 form-control-lg"
                 type="search"
                 placeholder="Search By Participant's Name"
                 aria-label="Search"
                 onChange={onChangeSearch}
                  />
            </div>
        </div>
  )
}

export default SearchBox