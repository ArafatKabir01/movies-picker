import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='faq-section'>
            <h3>1st Question : How React Works?</h3>
            <p><b>Ans:</b> React Js is the library of javascrift.React makes it painless to create interactive UIs.React is component based library that manage their own state, then compose them to make complex UIs.</p>
            <h3>2nd Question : Differnce between props vs state</h3>
            <p><b>Ans:</b> State: 
                        1. State changes can be asynchronous. 
                        2. State is mutable.
                        3. State holds information about the components.
                        4. State cannot be accessed by child components.
                        5. States can be used for rendering dynamic changes with the component.
                </p>
                <p>
                    Props: 
                    1. Props are read-only.
                    2. Props are immutable.
                    3. Props can be accessed by the child component.
                    4. Stateless component can have Props.
                    5. Props make components reusable.
                </p>
            
        </div>
    );
};

export default Question;