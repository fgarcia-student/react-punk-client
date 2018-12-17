import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, ReferenceDot } from 'recharts';
import BeerCard from './BeerCard';

const SelectedAttributeGraph = (props) => {
    const [lineColor, lineWidth] = ["#8884d8", 3];
    const [selectedDotRadius, selectedDotColor] = [5, lineColor];
    const [index, setIndex] = useState(Math.ceil(props.beer.size / 2));

    useEffect(() => {
        setIndex(Math.ceil(props.beer.size / 2));
    }, [props.beer])

    const sorted = props.beer.sort((a, b) => {
        if (a[props.selectedAttribute] > b[props.selectedAttribute]) { return 1; }
        if (a[props.selectedAttribute] < b[props.selectedAttribute]) { return -1; }
        return 0;
    }).toList();

    function increaseIndex() {
        if (index + 1 < props.beer.size) {
            setIndex(index + 1);
        }
    }

    function decreaseIndex() {
        if (index - 1 >= 0) {
            setIndex(index - 1);
        }
    }

    function jumpToStart() {
        setIndex(0);
    }

    function jumpToEnd() {
        setIndex(props.beer.size - 1);
    }

    if (props.beer.size === 0) {
        return <div>Loading...</div>
    }

    return (
        <div className="section_interactive_graph">
            <div className="section_interactive_graph__container">
                <ResponsiveContainer>
                    <LineChart data={sorted.toArray()}>
                        <ReferenceDot
                            x={index}
                            y={sorted.get(index)[props.selectedAttribute]}
                            r={selectedDotRadius}
                            fill={selectedDotColor}
                        />
                        <Line
                            type="monotone"
                            dataKey={props.selectedAttribute}
                            dot={false}
                            stroke={lineColor}
                            strokeWidth={lineWidth}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="section_interactive_graph__card_wrapper">
                <i className={"icon-arrows-left-double-32 font-size-large"} onClick={jumpToStart}></i>
                <i className={"icon-arrows-left font-size-large"} onClick={decreaseIndex}></i>
                <BeerCard
                    main={"name"}
                    sub={"tagline"}
                    attribute={props.selectedAttribute}
                    beer={sorted.get(index, null)}
                    />
                <i className={"icon-arrows-right font-size-large"} onClick={increaseIndex}></i>
                <i className={"icon-arrows-right-double font-size-large"} onClick={jumpToEnd}></i>
            </div>
        </div>
    );
}

export default SelectedAttributeGraph;