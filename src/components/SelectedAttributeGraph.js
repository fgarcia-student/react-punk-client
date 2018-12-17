import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Tooltip, Line, ReferenceDot } from 'recharts';
import BeerCard from './BeerCard';

const SelectedAttributeGraph = (props) => {
    const [lineColor, lineWidth] = ["#8884d8", 3];
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

    if (props.beer.size === 0) {
        return <div>Loading...</div>
    }

    return (
        <div className="section_interactive_graph">
            <div className="section_interactive_graph__container">
                <ResponsiveContainer>
                    <LineChart data={sorted.toArray()}>
                        <Tooltip />
                        <ReferenceDot
                            x={index}
                            y={sorted.get(index)[props.selectedAttribute]}
                            fill={lineColor}
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
                <i className={"icon-arrows-left font-size-large"} onClick={decreaseIndex}></i>
                <BeerCard
                    main={"name"}
                    sub={"tagline"}
                    attribute={props.selectedAttribute}
                    beer={sorted.get(index, null)}
                    />
                <i className={"icon-arrows-right font-size-large"} onClick={increaseIndex}></i>
            </div>
        </div>
    );
}

export default SelectedAttributeGraph;