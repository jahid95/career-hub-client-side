import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold bg-blue-100 p-8'>Blogs</h2>
            <div className='text-left my-6 bg-blue-50 p-4 rounded-lg'>
                <p className='text-xl font-semibold my-2 text-blue-800'>Q-1. when should you use context api in react?</p>
                <p className='text-lg font-medium text-gray-500'>Answer: In general, you should consider using the Context API when you have data that needs to be accessed by multiple components at different levels of the component tree, and when you want to avoid prop drilling. However, you should also be aware that the Context API can add complexity to your code and may not be necessary for smaller applications or simpler data management needs.</p>
            </div>
            <div className='text-left my-6 bg-blue-50 p-4 rounded-lg'>
                <p className='text-xl font-semibold my-2 text-blue-800'>Q-2.What is custom hook?</p>
                <p className='text-lg font-medium text-gray-500'>Answer: By using custom hooks you can specify logic in the component and avoid repeating the component's code. For example, if you use the same logic in multiple components, you can convert that logic into a custom hook to use in the component.</p>
                <br />
                <p>A custom hook is a special type of hook for a React functional component. It works like other hooks like useState, useEffect etc. hooks but it is customized to avoid repeating the component's logic code.</p>
            </div>
            <div className='text-left my-6 bg-blue-50 p-4 rounded-lg'>
                <p className='text-xl font-semibold my-2 text-blue-800'>Q-3.  What does use work of useRef?</p>
                <p className='text-lg font-medium text-gray-500'>Answer: In React, useMemo() is a hook that is useful for memoizing (caching) the result of a computation so that it does not have to be re-computed on every render.</p>
                <br />
                <p>If you have a function that depends on external variables or props, you can use useMemo() to memoize the function so that it only needs to be re-defined when the dependencies change. This can help improve performance by avoiding unnecessary re-definitions of the function.</p>
               
            </div>
            <div className='text-left my-6 bg-blue-50 p-4 rounded-lg'>
                <p className='text-xl font-semibold my-2 text-blue-800'>Q-4. What does use work of useRef?</p>
                <p className='text-lg font-medium text-gray-500'>Answer: In React, useRef() is a hook that is useful for accessing or manipulating a DOM element or a variable that persists across re-renders.
                <br />
                <br />
                1.If you need to get a reference to a DOM element, you can use useRef() to create a reference and attach it to the element. This way, you can access the element's properties and methods, such as its current value or its size.
                <br />
                <br />
                2.useRef() can also be used to store mutable values that persist across re-renders. Unlike state, which triggers a re-render whenever it changes, changing the value of a ref does not trigger a re-render. This can be useful for storing things like the previous state of a component, a timer ID, or a flag that indicates whether a component is mounted.
                </p>
            </div>
        </div>
    );
};

export default Blogs;