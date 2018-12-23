import React, { useState } from 'react';
import Button from './Button';

const SearchByAttribute = (props) => {
    return (
        <div className="search-by-attribute">
            <div className="search-by-attribute__attribute uppercase">{props.selectedAttribute}</div>
            <div className="search-by-attribute__input">
                <input type="number" onChange={props.setSearchVal} value={props.searchVal} />
            </div>
        </div>
    );
}

const ContinueSearch = (props) => {
    const [bSideActive, toggleSide] = useState(false);
    const [searchVal, setSearchVal] = useState();

    function _toggleSide() {
        toggleSide(!bSideActive);
    }

    function _setSearchVal(e) {
        setSearchVal(e.currentTarget.value);
    }

    function startDefaultSearch() {
        console.log("start default search...");
    }

    function startFilteredSearch() {
        console.log("start filtered search...");
    }

    return (
        <section className="section_continue_search">
            <div className="section_continue_search__title">Continue your search</div>
            <div className="section_continue_search__search">
                <div className="section_continue_search__search__basic-search">
                    <Button
                        icon={"lba lba-basic-magnifier"}
                        onClick={startDefaultSearch}
                    />
                </div>
                {!bSideActive &&
                    <div className="section_continue_search__search__filter-search--aside">
                        <Button
                            icon={"lba lba-basic-magnifier"}
                            text={`by ${props.selectedAttribute.toUpperCase()}`}
                            onClick={_toggleSide}
                        />
                    </div>
                }
                {bSideActive &&
                    <div className="section_continue_search__search__filter-search--bside">
                        <Button
                            icon={"lba lba-basic-magnifier"}
                            onClick={startFilteredSearch}
                        >
                            <SearchByAttribute
                                searchVal={searchVal}
                                setSearchVal={_setSearchVal}
                                selectedAttribute={props.selectedAttribute}
                            />
                        </Button>
                    </div>
                }
            </div>
        </section>
    );
}

export default ContinueSearch;
