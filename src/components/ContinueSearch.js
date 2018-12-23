import React, { useState } from 'react';
import Button from './Button';

const ContinueSearch = (props) => {
    const [bSideActive, toggleSide] = useState(false);

    function toggleBSide() {
        toggleSide(!bSideActive);
    }

    function startDefaultSearch() {
        console.log("start default search...");
    }

    function startFilteredSearch() {
        console.log("start filtered search...");
    }

    return (
        <div className="section_continue_search">
            <div className="section_continue_search__title">Continue your search</div>
            <div className="section_continue_search__basic-search">
                <Button
                    onClick={startDefaultSearch}
                />
            </div>
            {!bSideActive &&
                <div
                    className="section_continue_search__filter-search--aside"
                    onClick={toggleBSide}
                >
                    <i className="lba lba-basic-magnifier" />
                    <span>by <span className="uppercase">{props.selectedAttribute}</span></span>
                </div>
            }
            {bSideActive &&
                <div
                    className="section_continue_search__filter-search--bside"
                    onClick={startFilteredSearch}
                >
                    <i className="lba lba-basic-magnifier" />
                </div>
            }
        </div>
    );
}

export default ContinueSearch;
