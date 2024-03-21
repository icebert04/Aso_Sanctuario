
import React from 'react';

const Population = () => {
    return (
        <section className='my-10 container-population'>
        <div className='pop-header'>
           <h1 className='text-center text-4xl text-slate-800 p-4'>Did You Know?</h1>
        </div>
        <div className='pop-text'>
            <div className=''>
                <ul className='pop-text-top'>
                    <li className=''><h2>Millions</h2><br/> Estimates suggest the stray dog population in the Philippines could be in the millions.</li>
                    <li className=''><h2>500,000</h2><br/> A 2015 report by the World Animal Protection organization estimated that there were over 500,000 stray dogs in Metro Manila alone.</li>
                    <li className=''><h2>70%</h2><br/> Some animal welfare organizations estimate that around 70% of the dog population in the Philippines might be homeless.</li>
                </ul>
            </div>
        </div>
      </section>
    );
  };
  
  export default Population;