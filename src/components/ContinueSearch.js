import React, { useState } from 'react';
import Button from './Button';
import { Element } from 'react-scroll';

const SearchByAttribute = (props) => {
    const inputRef = React.useRef();
    if (inputRef.current && props.isActive) { inputRef.current.focus(); }
    const handleFocus = (e) => { inputRef.current.focus(); e.stopPropagation(); }
    return (
        <div className="search-by-attribute" onClick={handleFocus}>
            <div className="search-by-attribute__attribute uppercase">{props.selectedAttribute}</div>
            <div className="search-by-attribute__input">
                <input ref={inputRef} type="number" onChange={props.setSearchVal} value={props.searchVal} />
            </div>
        </div>
    );
}

const ContinueSearch = (props) => {
    const [bSideActive, toggleSide] = useState(false);
    const [searchVal, setSearchVal] = useState("");

    function _setSearchVal(e) {
        setSearchVal(e.currentTarget.value);
    }

    function startDefaultSearch() {
        console.log("start default search...");
    }

    function startFilteredSearch() {
        if (!bSideActive || !searchVal) return toggleSide(!bSideActive)
        console.log("start filtered search...");
    }

    return (
        <section className="section_continue_search">
            <Element name="refine" />
            <div className="section_continue_search__title">Refine your search</div>
            <div className="section_continue_search__search">
                <div className="section_continue_search__search__basic-search">
                    <Button
                        icon={"lba lba-basic-magnifier"}
                        onClick={startDefaultSearch}
                    />
                </div>
                <div className="section_continue_search__search__filter-search">
                    <Button
                        icon={"lba lba-basic-magnifier"}
                        text={`by ${props.selectedAttribute.toUpperCase()}`}
                        showB={bSideActive}
                        onClick={startFilteredSearch}
                        b={<SearchByAttribute
                            isActive={bSideActive}
                            searchVal={searchVal}
                            setSearchVal={_setSearchVal}
                            selectedAttribute={props.selectedAttribute}
                        />}
                    />
                </div>
            </div>
        </section>
    );
}

export default ContinueSearch;
