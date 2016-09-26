import React from 'react';

import * as i18n from './LandingHeaderI18n.json';

export default function LandingHeader({language}){
    console.log(i18n);
    return(
        <div className="row">
            <div className="col-md-4">
                <h2>
                    {i18n[language].title}
                </h2>
            </div>
            <div className="col-md-8">
                <h2>
                    Hello 2
                </h2>
            </div>
        </div>
    )
}