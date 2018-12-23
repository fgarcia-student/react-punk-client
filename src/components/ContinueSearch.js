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
            <div className="section_continue_search__search">
                <div className="section_continue_search__search__basic-search">
                    <Button
                        onClick={startDefaultSearch}
                    />
                </div>
                {!bSideActive &&
                    <div
                        className="section_continue_search__search__filter-search--aside"
                        onClick={toggleBSide}
                    >
                        <Button
                            text={`by ${props.selectedAttribute.toUpperCase()}`}
                        />
                    </div>
                }
                {bSideActive &&
                    <div
                        className="section_continue_search__search__filter-search--bside"
                        onClick={startFilteredSearch}
                    >
                        <i className="lba lba-basic-magnifier" />
                    </div>
                }
            </div>
        </div>
    );
}

export default ContinueSearch;
