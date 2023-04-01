import React from 'react';

const Questions = () => {
    return (
        <div className='m-2 '>
            <div className="mt-4 shadow-md p-4 rounded-lg border-textColor border-[1px] bg-purple-200">
                <h1 className='text-3xl font-semibold text-textColor'>Props vs State</h1>
                <p className='mt-4 text-slate-500 font-medium'>props: props is an object. we can send data component to components using props. this call props drilling...
                    state: React components has a built in state object. The state object is where we store property values that belongs to the component. when the state object changes, the component re-renders..</p>
            </div>
            <div className="mt-4 shadow-md p-4 rounded-lg border-textColor border-[1px] bg-purple-200">
                <h1 className='text-3xl font-semibold text-textColor'>How useState are work?</h1>
                <p className='mt-4 text-slate-500 font-medium'>UseState: useState is a function. it takes default value as parameter. it returns an array. we get 2 elements in array first is state and second is a set function. </p>
            </div>
            <div className="mt-4 shadow-md p-4 rounded-lg border-textColor border-[1px] bg-purple-200">
                <h1 className='text-3xl font-semibold text-textColor'>what else can useEffect do but data loading?</h1>
                <p className='mt-4 text-slate-500 font-medium'>useEffect is a side effect. when useEffect change this can rerender original dom..</p>
            </div>
            <div className="mt-4 shadow-md p-4 rounded-lg border-textColor border-[1px] bg-purple-200">
                <h1 className='text-3xl font-semibold text-textColor'>how does react work??</h1>
                <p className='mt-4 text-slate-500 font-medium'>react is a component library. it create a virtual dom. we can create components and reduce writeing code...</p>
            </div>
        </div>
    );
};

export default Questions;