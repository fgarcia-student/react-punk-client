import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, ReferenceDot } from 'recharts';
import BeerCard from './BeerCard';
import { Element } from 'react-scroll';

const SelectedAttributeGraph = (props) => {
    const [lineColor, lineWidth] = ["#A52A2A", 6];
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
        <section className="section_interactive_graph">
            <Element name="interactive" />
            <div className="section_interactive_graph__container">
                <ResponsiveContainer>
                    <LineChart className={"svg-padding"} data={sorted.toArray()}>
                        <Line
                            type="monotone"
                            dataKey={props.selectedAttribute}
                            dot={false}
                            stroke={lineColor}
                            strokeWidth={lineWidth}
                            isAnimationActive={false}
                        />
                        <ReferenceDot
                            className="dot-padding"
                            x={index}
                            y={sorted.get(index)[props.selectedAttribute]}
                            r={selectedDotRadius}
                            fill={selectedDotColor}
                            isFront={true}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="section_interactive_graph__card_wrapper">
                <i className={"icon-arrows-left-double-32"} onClick={jumpToStart}></i>
                <i className={"icon-arrows-left"} onClick={decreaseIndex}></i>
                <div
                    style={{
                        position: "relative",
                        display: "block",
                        padding: 0,
                        background: "none",
                    }}
                    className="card"
                >
                    <BeerCard
                        main={"name"}
                        sub={"tagline"}
                        attribute={props.selectedAttribute}
                        beer={sorted.get(index, null)}
                    />
                </div>
                <i className={"icon-arrows-right"} onClick={increaseIndex}></i>
                <i className={"icon-arrows-right-double"} onClick={jumpToEnd}></i>
            </div>
        </section>
    );
}

export default SelectedAttributeGraph;