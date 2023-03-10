/* eslint-disable @next/next/no-img-element */
'use client';

import { memo } from 'react';
import './styles.css';

/**
 * Here we are 10 tech stacks list.
 * What we expect is to move the items list and add one item (javascript) to the list using redux
 * 
 * @todo:
 * - Add and install redux to the project eg: yarn install redux.
 * - Implement the store, reducer, action.
 * - On click on the button, dispatch an action to add Javascript to the tech list
 *
 */

const ItemList = () => {

    const techs = ["HTML/CSS", "React", "VueJs", "NodeJs", "Typescript", "Java", "Python", "PHP", "Go", "C#"];

    const addJsToTheList = () => {

    }

    return (
        <div>
            <ul>
                {
                    techs.map((tech) => <li key={`${tech.toLowerCase()}`} className="item">{tech}</li>)
                }
            </ul>
            <button className='btn btn-add' onClick={addJsToTheList}>Add Javascript after NodeJs</button>
        </div>
    );
}

export default memo(ItemList);