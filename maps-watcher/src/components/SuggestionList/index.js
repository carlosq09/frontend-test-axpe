import React, { Fragment, useState, useEffect } from 'react'

const SuggestionList = ({ list }) => {
    return (
        <ul>
            {list.length && list.map((suggestion) => {
                return <li>{suggestion}</li>
            })}
        </ul>
    );
}

export default SuggestionList