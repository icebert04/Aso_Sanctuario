
import React from 'react';

const Challenge = () => {
    return (
      <section>
        <h1 className='text-center text-4xl text-slate-800 p-4'>Challenges in the dog industry</h1>
        <div className="container-issue">
            <div className="left-issue rounded">
            <ul><h2 className='text-2xl py-4 font-bold'>Unethical breeding practices:</h2>

                <li><b>Puppy mills:</b> These mass breeding facilities prioritize profit over animal welfare, often leading to overcrowded, unsanitary conditions and health problems in dogs.</li>
                <li><b>Inbreeding:</b> Unethical breeders may prioritize specific physical traits without considering potential health issues from excessive inbreeding.</li>
                <li><b>Lack of transparency:</b> Consumers may struggle to verify the source and breeding practices behind puppies they encounter.</li>
            </ul>
            </div>
            <div className="right-issue rounded">
            <ul><h2 className='text-2xl py-4 font-bold'>Overpopulation and homelessness:</h2>

                <li><b>Unplanned breeding:</b> Accidental litters and irresponsible breeding contribute to dog overpopulation, leading to overcrowded shelters and euthanasia.</li>
                <li><b>Abandonment:</b> Owners may surrender dogs due to various reasons, including financial constraints, behavioral issues, or changing life circumstances.</li>
                <li><b>Limited adoption rates:</b> While adoption is encouraged, shelters sometimes struggle to find suitable homes for all dogs in their care.</li>
            </ul>
            </div>
        </div>
      </section>
    );
  };
  
  export default Challenge;